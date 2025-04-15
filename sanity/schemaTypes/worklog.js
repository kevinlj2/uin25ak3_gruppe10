export const worklog = {
  name: 'worklog',
  title: 'Arbeidslogg',
  type: 'document',
  fields: [
    {
      name: 'lognumber',
      type: 'number',
    },
    {
      name: 'logs',
      title: 'Logg',
      type: 'string',
    },
    {
      name: 'hoursspent',
      title: 'Timer brukt',
      type: 'number',
    },
    {
      name: 'memberlog',
      title: 'Medlem som logger',
      type: 'string',
    },
    {
      name: 'dato',
      title: 'Dato',
      type: 'date',
    },
  ],
}
