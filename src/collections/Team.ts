import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  admin: {
    defaultColumns: ['name', 'role', 'email'],
    useAsTitle: 'name',
    description: 'Collection of team members',
  },
  fields: [
    {
      type: 'upload',
      name: 'photo',
      label: 'Profile Photo',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      required: true,
    },
    {
      type: 'text',
      name: 'role',
      label: 'Role/Position',
      required: true,
    },
    {
      type: 'array',
      name: 'socialLinks',
      label: 'Social Links',
      fields: [
        {
          type: 'text',
          name: 'platform',
          label: 'Platform (e.g., Twitter, LinkedIn)',
          required: true,
        },
        {
          type: 'text',
          name: 'url',
          label: 'Profile URL',
          required: true,
        },
      ],
    },
  ],
}
