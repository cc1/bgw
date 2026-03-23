export interface ResearchArticle {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  substackUrl: string;
}

// Fallback image for posts where RSS doesn't include one
const FALLBACK_IMAGE = "/images/articles/what-is-intuition.jpg";

// Local image overrides for posts we already have downloaded images for.
// Key is a slug derived from the Substack URL path.
const LOCAL_IMAGES: Record<string, string> = {
  "what-conflict-is-teaching-me-about": "/images/articles/conflict-consciousness.jpg",
  "the-telepathy-tapes-and-the-trap": "/images/articles/telepathy-tapes.jpg",
  "why-cant-i-see-the-jellyfish": "/images/articles/jellyfish.jpg",
  "trauma-doesnt-make-it-less-real": "/images/articles/trauma.jpg",
  "nine-months-into-my-phd-journeyan": "/images/articles/phd-update.jpg",
  "spaciousness": "/images/articles/spaciousness.jpg",
  "an-unlikely-pairing-intention-letting": "/images/articles/intention.jpg",
  "intuition-neither-divine-nor-mundane": "/images/articles/divine-mundane.jpg",
  "what-is-intuition": "/images/articles/what-is-intuition.jpg",
  "intuition-a-rediscovery": "/images/articles/rediscovery.jpg",
};

function slugFromUrl(url: string): string {
  try {
    const path = new URL(url).pathname.replace(/^\/p\//, "").replace(/\/$/, "");
    return path;
  } catch {
    return "";
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function extractImageFromContent(content: string): string | null {
  const match = content.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function fetchResearchArticles(): Promise<ResearchArticle[]> {
  try {
    const response = await fetch("https://intointuition.substack.com/feed");
    const xml = await response.text();

    const articles: ResearchArticle[] = [];
    const items = xml.split("<item>");

    for (let i = 1; i < items.length; i++) {
      const item = items[i];

      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/s)
        || item.match(/<title>(.*?)<\/title>/s);
      const linkMatch = item.match(/<link>(.*?)<\/link>/s);
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/s);
      const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s)
        || item.match(/<description>(.*?)<\/description>/s);
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s);

      if (!titleMatch || !linkMatch) continue;

      const title = stripHtml(titleMatch[1]);
      const url = linkMatch[1].trim();
      const slug = slugFromUrl(url);
      const date = dateMatch ? new Date(dateMatch[1].trim()).toISOString().split("T")[0] : "";
      const excerpt = descMatch ? stripHtml(descMatch[1]).slice(0, 200) : "";

      // Use local image if we have one, otherwise try to extract from content, otherwise fallback
      const image = LOCAL_IMAGES[slug]
        || (contentMatch ? extractImageFromContent(contentMatch[1]) : null)
        || FALLBACK_IMAGE;

      articles.push({ title, date, excerpt, image, substackUrl: url });
    }

    return articles;
  } catch (error) {
    console.error("Failed to fetch Substack RSS, using empty list:", error);
    return [];
  }
}
