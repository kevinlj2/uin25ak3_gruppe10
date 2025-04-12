import { createClient } from "@sanity/client";

const options = {
  projectId: "f6809pwb",
  dataset: "production",
};

const client = createClient({
  ...options,
  apiVersion: "2025-04-08",
  useCdn: false,
});

export default client;
