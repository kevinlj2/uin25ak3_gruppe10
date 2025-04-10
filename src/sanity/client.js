import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "f6809pwb",
  dataset: "production",
  apiVersion: "v2025-04-10",
  useCdn: false,
});

export const getHeaderData = async () => {
  const query = `*[_type == "members"][0]{
  Name,
  Epost,
  Intrests,
  Biografi,
  Bilde
}`;
  return await client.fetch(query);
};
