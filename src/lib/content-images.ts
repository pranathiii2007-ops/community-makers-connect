// Resolves a stored image reference to a usable URL.
// Seeded rows reference a bundled asset by filename (image_key); newer/edited
// rows can point at an uploaded file in Cloud storage (image_url).

const modules = import.meta.glob("/src/assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const byFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop();
  if (file) byFilename[file] = url;
}

export function resolveImage(imageKey?: string | null, imageUrl?: string | null): string {
  if (imageUrl) return imageUrl;
  if (imageKey && byFilename[imageKey]) return byFilename[imageKey];
  return "";
}
