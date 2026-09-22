#!/usr/bin/env node
// Sync new Substack posts into the site.
//
//   npm run sync            fetch feed, add new posts + header images, report
//   npm run sync -- --push  same, then commit and push (triggers the deploy)
//
// The site builds from src/data/substack-posts.json, never from the live
// feed (GitHub's build runners are blocked by Substack). Existing entries in
// the JSON are never modified, so excerpts and images can be hand-edited.
// Only posts whose slug is not yet in the file are added.

import { readFile, writeFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp"; // already present as an Astro dependency

const FEED_URL = "https://intointuition.substack.com/feed";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_FILE = path.join(ROOT, "src/data/substack-posts.json");
const IMAGE_DIR = path.join(ROOT, "public/images/articles");
const UA = { "User-Agent": "Mozilla/5.0 (compatible; BethGlickSite/1.0)" };
const push = process.argv.includes("--push");

function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function stripHtml(html) {
  return decodeEntities(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function field(item, tag) {
  const m =
    item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[(.*?)\\]\\]></${tag}>`, "s")) ||
    item.match(new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, "s"));
  return m ? m[1] : "";
}

function headerImageUrl(content) {
  const img = content.match(/<img[^>]+src="([^"]+)"/);
  if (!img) return null;
  // Substack wraps the original S3 URL inside a CDN transform URL.
  const s3 = img[1].match(/https%3A%2F%2Fsubstack-post-media\.s3\.amazonaws\.com[^"&)]+/);
  return s3 ? decodeURIComponent(s3[0]) : img[1];
}

function parseFeed(xml) {
  return xml
    .split("<item>")
    .slice(1)
    .map((item) => {
      const url = field(item, "link").trim();
      const slug = new URL(url).pathname.replace(/^\/p\//, "").replace(/\/$/, "");
      const pubDate = field(item, "pubDate").trim();
      return {
        slug,
        title: stripHtml(field(item, "title")).replace(/!+$/, ""),
        date: pubDate ? new Date(pubDate).toISOString().slice(0, 10) : "",
        excerpt: stripHtml(field(item, "description")).slice(0, 200),
        url,
        imageUrl: headerImageUrl(field(item, "content:encoded")),
      };
    })
    .filter((p) => p.slug && p.title);
}

async function downloadImage(post, existingFiles) {
  const existing = existingFiles.find((f) => f.replace(/\.[^.]+$/, "") === post.slug);
  if (existing) return `/images/articles/${existing}`;
  if (!post.imageUrl) return null;
  const res = await fetch(post.imageUrl, { headers: UA });
  if (!res.ok) throw new Error(`image download failed (${res.status}) for ${post.slug}`);
  const file = `${post.slug}.jpg`;
  // Header images are shown at most ~600px wide; cap at 1600px and flatten to JPEG.
  await sharp(Buffer.from(await res.arrayBuffer()))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(IMAGE_DIR, file));
  return `/images/articles/${file}`;
}

const posts = JSON.parse(await readFile(POSTS_FILE, "utf8"));
const known = new Set(posts.map((p) => p.slug));

const res = await fetch(FEED_URL, { headers: UA });
if (!res.ok) throw new Error(`feed fetch failed: ${res.status}`);
const feed = parseFeed(await res.text());
if (feed.length === 0) throw new Error("feed parsed to 0 posts; not touching anything");

const fresh = feed.filter((p) => !known.has(p.slug));
if (fresh.length === 0) {
  console.log(`Up to date: ${posts.length} posts, nothing new on Substack.`);
  process.exit(0);
}

const imageFiles = await readdir(IMAGE_DIR);
const added = [];
for (const p of fresh) {
  const image = await downloadImage(p, imageFiles);
  added.push({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    image: image ?? "/images/articles/what-is-intuition.jpg",
    url: p.url,
  });
  console.log(`+ ${p.date}  ${p.title}${image ? "" : "  (no header image found, using fallback)"}`);
}

const merged = [...added, ...posts].sort((a, b) => b.date.localeCompare(a.date));
await writeFile(POSTS_FILE, JSON.stringify(merged, null, 2) + "\n");
console.log(`Added ${added.length} post(s). Snapshot now has ${merged.length}.`);

if (push) {
  const titles = added.map((p) => p.title).join(", ");
  execFileSync("git", ["add", POSTS_FILE, IMAGE_DIR], { cwd: ROOT, stdio: "inherit" });
  execFileSync("git", ["commit", "-m", `Add Substack post(s): ${titles}`], { cwd: ROOT, stdio: "inherit" });
  execFileSync("git", ["push"], { cwd: ROOT, stdio: "inherit" });
  console.log("Pushed. GitHub Pages will redeploy in a minute or two.");
} else {
  console.log("Review the changes, then commit and push (or rerun with --push).");
}
