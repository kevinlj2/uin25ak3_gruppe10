import client from "./client";

export const getGroupMembers = async () => {
  const query = `*[_type == "members"]{
    Navn,
    Epost,
    Interesser,
    Biografi,
    "BildeUrl": Bilde.asset->url,
    "slug": memberslug.current
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [];
  }
};

export const getWorklog = async () => {
  const query = `*[_type == "worklog"] | order(Lognumber asc){
    logs,
    hoursspent,
    memberlog,
    dato
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Sanity fetch error (worklog):", error);
    return [];
  }
};
