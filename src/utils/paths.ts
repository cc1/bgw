const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (path.startsWith('http') || path.startsWith('mailto:')) return path;
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
}
