const GITHUB_PAGES_BASE_PATH = "/portfolio";

function normalizePagePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (
    normalizedPath.endsWith("/") ||
    normalizedPath.includes("?") ||
    normalizedPath.includes("#") ||
    /\.[a-z0-9]+$/i.test(normalizedPath)
  ) {
    return normalizedPath;
  }

  return `${normalizedPath}/`;
}

export function getPagePath(path: string) {
  const isProd = process.env.NODE_ENV === "production";
  const normalizedPath = normalizePagePath(path);

  if (normalizedPath === "/") {
    return isProd ? `${GITHUB_PAGES_BASE_PATH}/` : "/";
  }

  return isProd ? `${GITHUB_PAGES_BASE_PATH}${normalizedPath}` : normalizedPath;
}
