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
      type: 'array',
      name: 'projects',
      label: 'Projects',
      fields: [
        {
          type: 'relationship',
          name: 'projectImage',
          label: 'Project Image',
          relationTo: 'gallery',
          required: true,
        },
        {
          type: 'select',
          name: 'height',
          label: 'Image Height',
          required: true,
          options: [
            {
              label: 'Short',
              value: 'short',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Tall',
              value: 'tall',
            },
          ],
        }
      ],
    },
  ],
}
