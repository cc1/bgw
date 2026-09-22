import posts from "./substack-posts.json";

export interface ResearchArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  substackUrl: string;
}

// The site never fetches Substack at build time: GitHub's build runners are
// blocked by Substack, so the feed is snapshotted into substack-posts.json.
// Run `npm run sync` to pull in new posts (see scripts/sync-substack.mjs).
export function getResearchArticles(): ResearchArticle[] {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      image: p.image,
      substackUrl: p.url,
    }));
}
