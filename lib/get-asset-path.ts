const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function getAssetPath(path: string) {
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

  return `${basePath}${normalizedPath}`;
}
