import { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services-block',
  fields: [
    {
      type: 'text',
      name: 'sectionTitle',
      label: 'Section Title',
      required: true,
    },
    {
      type: 'text',
      name: 'sectionParagraph',
      label: 'Section Paragraph',
      required: true,
    },
    {
      type: 'relationship',
      name: 'services',
      label: 'Services',
      relationTo: 'services',
      hasMany: true,
      required: true,
    },
  ],
}
