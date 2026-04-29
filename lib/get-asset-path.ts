const GITHUB_PAGES_BASE_PATH = "/portfolio";

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === "production";

  if (!path) {
    return path;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return isProd ? `${GITHUB_PAGES_BASE_PATH}${normalizedPath}` : normalizedPath;
}
