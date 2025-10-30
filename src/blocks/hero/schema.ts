import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      type: 'array',
      name: 'slides',
      label: 'Slides',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          type: 'relationship',
          name: 'image',
          label: 'Gallery Image',
          relationTo: 'gallery',
          required: true,
        },
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: true,
        },
        {
          type: 'text',
          name: 'subtitle',
          label: 'Subtitle',
        },
        {
          type: 'text',
          name: 'description',
          label: 'Description',
        },
      ],
    },
  ],
}
