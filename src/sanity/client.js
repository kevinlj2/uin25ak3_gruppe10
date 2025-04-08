import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "f6809pwb",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
});
