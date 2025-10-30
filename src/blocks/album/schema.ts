import { Block } from 'payload'

export const AlbumBlock: Block = {
  slug: 'album',
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
      required: true,  
      minRows: 1,
      maxRows: 10,
      hasMany: true,  
   }
  ],
}
