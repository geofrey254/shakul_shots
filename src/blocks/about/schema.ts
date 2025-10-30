import { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'about',
  fields: [
    {
      type: 'upload',
      name: 'image',
      label: 'About Image',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'text',
      name: 'title',
      label: 'About Title',
      required: true,
    },
    {
        type: 'textarea',
        name:'paragraphOne',
        label:'Paragraph One',
        required:true
    },
    {
        type: 'textarea',
        name:'paragraphTwo',
        label:'Paragraph Two',
        required:true
    },
    {
      type: 'text',
      name: 'instagramLink',
      label: 'Instagram Link',
      required:true
    },
  ],
}
