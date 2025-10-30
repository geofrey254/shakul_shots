import { Block } from 'payload'

export const AlbumBlock: Block = {
  slug: 'album',
  fields: [
    {
      type: 'array',
      name: 'albums',
      label: 'Albums',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          type: 'text',
          name: 'albumTitle',
          label: 'Album Title',
          required: true,
        },
        {
          type: 'relationship',
          name: 'photos',
          label: 'Photos',
          relationTo: 'gallery',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
}
