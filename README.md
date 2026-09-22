# bethglick.com

Personal website for Beth H. Glick — researcher, PhD student, coach, and organizational strategist.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static output to dist/
```

## Adding a new Substack post

The Writing page is built from a committed snapshot, `src/data/substack-posts.json`,
not from the live feed (GitHub's build runners are blocked by Substack). When Beth
publishes a new essay:

```bash
npm run sync -- --push
```

This fetches the feed, adds any post not already in the snapshot, downloads and
resizes its header image into `public/images/articles/`, then commits and pushes.
GitHub Pages redeploys automatically. Run `npm run sync` without `--push` to review
the changes first.

Existing entries in the snapshot are never touched, so excerpts and images can be
hand-edited (for example, to recrop a header image) and will survive future syncs.
