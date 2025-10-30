import { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolio',
  fields: [
    {
      type: 'array',
      name: 'projects',
      label: 'Projects',
      fields: [
        {
          type: 'text',
          name: 'projectTitle',
          label: 'Project Title',
          required: true,
        },
        {
          type: 'relationship',
          name: 'projectImage',
          label: 'Project Image',
          relationTo: 'gallery',
          required: true,
        },
      ],
    },
  ],
}
