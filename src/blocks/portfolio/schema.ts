import { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolio',
  fields: [
    {
      type: 'text',
      name: 'sectionTitle',
      label: 'Section Title',
      required: true,
    },
    {
      type: 'textarea',
      name: 'sectionParagraph',
      label: 'Section Paragraph',
      required: true,
    },
    {
      type: 'relationship',
      name: 'projects',
      label: 'Projects',
      relationTo: 'gallery',
      hasMany: true,
      required: true,
    },
  ],
}
