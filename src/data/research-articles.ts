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

    if (articles.length === 0) {
      console.warn("RSS fetch returned 0 articles, using fallback list");
      return FALLBACK_ARTICLES;
    }
    return articles;
  } catch (error) {
    console.error("Failed to fetch Substack RSS, falling back to hardcoded list:", error);
    return FALLBACK_ARTICLES;
  }
}

// Hardcoded fallback — used if RSS fetch fails (e.g. network issues in CI)
const FALLBACK_ARTICLES: ResearchArticle[] = [
  {
    title: "What Conflict Is Teaching Me About Consciousness",
    date: "2025-05-14",
    excerpt: "The choice is ours: to dismiss what doesn\u2019t fit\u2014labeling it pathological, unscientific, or fringe\u2014or to stay open, curious, and willing to listen to what these experiences might reveal.",
    image: "/images/articles/conflict-consciousness.jpg",
    substackUrl: "https://intointuition.substack.com/p/what-conflict-is-teaching-me-about",
  },
  {
    title: "The Telepathy Tapes and the Trap of Certainty: A Case for Wonder and Not Knowing",
    date: "2025-01-10",
    excerpt: "A response to a materialist\u2019s critiques.",
    image: "/images/articles/telepathy-tapes.jpg",
    substackUrl: "https://intointuition.substack.com/p/the-telepathy-tapes-and-the-trap",
  },
  {
    title: "Why Can\u2019t I See The Jellyfish?",
    date: "2024-10-31",
    excerpt: "Drawn to these edges of the paranormal, this non-territory of paradox, liminality, and transformation.",
    image: "/images/articles/jellyfish.jpg",
    substackUrl: "https://intointuition.substack.com/p/why-cant-i-see-the-jellyfish",
  },
  {
    title: "Trauma Doesn\u2019t Make It Less Real",
    date: "2024-07-09",
    excerpt: "Those who have endured trauma, particularly as children, often report more paranormal experiences.",
    image: "/images/articles/trauma.jpg",
    substackUrl: "https://intointuition.substack.com/p/trauma-doesnt-make-it-less-real",
  },
  {
    title: "Nine Months Into My PhD Journey\u2026An Update",
    date: "2024-06-26",
    excerpt: "I am no longer tethered to intuition, not because it does not interest me, but because I see it within a shared space of bridges or thresholds.",
    image: "/images/articles/phd-update.jpg",
    substackUrl: "https://intointuition.substack.com/p/nine-months-into-my-phd-journeyan",
  },
  {
    title: "Spaciousness",
    date: "2023-08-10",
    excerpt: "There is a word that follows me these days \u2013 spaciousness. It is expansive and airy and ebbs and flows with breath.",
    image: "/images/articles/spaciousness.jpg",
    substackUrl: "https://intointuition.substack.com/p/spaciousness",
  },
  {
    title: "An Unlikely Pairing: Intention + Letting Go",
    date: "2023-07-19",
    excerpt: "Consider: the loosening of grip of ourselves, the forgetting of goal, the aimless wandering.",
    image: "/images/articles/intention.jpg",
    substackUrl: "https://intointuition.substack.com/p/an-unlikely-pairing-intention-letting",
  },
  {
    title: "Intuition: Both Divine + Mundane",
    date: "2023-06-26",
    excerpt: "The alignment I feel exploring intuition is like a gathering of disparate pieces: simultaneously mundane and divine, quotidian and transcendent.",
    image: "/images/articles/divine-mundane.jpg",
    substackUrl: "https://intointuition.substack.com/p/intuition-neither-divine-nor-mundane",
  },
  {
    title: "What is Intuition?",
    date: "2023-06-16",
    excerpt: "We all know the word intuition colloquially \u2013 perhaps informally translated to be some kind of \u2018inner knowing.\u2019 Of course, it\u2019s deeper than that.",
    image: "/images/articles/what-is-intuition.jpg",
    substackUrl: "https://intointuition.substack.com/p/what-is-intuition",
  },
  {
    title: "Intuition, A Rediscovery",
    date: "2023-05-28",
    excerpt: "My story of this beginning.",
    image: "/images/articles/rediscovery.jpg",
    substackUrl: "https://intointuition.substack.com/p/intuition-a-rediscovery",
  },
];
