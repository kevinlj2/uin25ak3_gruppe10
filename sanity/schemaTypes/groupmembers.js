export const groupmembers = {
  name: 'members',
  title: 'Members',
  type: 'document',
  fields: [
    {
      name: 'Navn',
      type: 'string',
    },
    {
      name: 'Epost',
      type: 'string',
    },
    {
      name: 'Interesser',
      type: 'string',
    },
    {
      name: 'Biografi',
      type: 'string',
    },
    {
      name: 'Bilde',
      type: 'image',
    },
    {
      name: 'memberslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'members',
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace('æ', 'ae')
            .replace('å', 'aa')
            .replace('ø', 'o')
            .slice(0, 200),
      },
    },
  ],
}
