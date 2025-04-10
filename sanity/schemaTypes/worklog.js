export const worklog = {
  name: 'worklog',
  title: 'Arbeidslogg',
  type: 'document',
  fields: [
    {
      name: 'Lognumber',
      title: 'Loggnummer',
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
  ],
}
