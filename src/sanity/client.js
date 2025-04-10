import { SanityClient } from "@sanity/client";

const options = {
  projectId: "f6809pwb",
  dataset: "production",
};

const client = SanityClient({
  ...options,
  apiVersion: "v2025-04-08",
  useCdn: true,
});

export default client;

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
