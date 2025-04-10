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
