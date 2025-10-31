import type { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/hero/schema'
import { ServicesBlock } from '@/blocks/services/schema'
import { AlbumBlock } from '@/blocks/album/schema'
import { AboutBlock } from '@/blocks/about/schema'
import { TeamBlock } from '@/blocks/team/schema'
import { PortfolioBlock } from '@/blocks/portfolio/schema'
import { ContactBlock } from '@/blocks/contact/schema'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
    description: 'Collection of site pages',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Page Title',
      required: true,
    },
    {
      type: 'text',
      name: 'slug',
      label: 'Page Slug',
      required: true,
      unique: true,
    },
    {
      type: 'blocks',
      name: 'layout',
      label: 'Page Layout',
      blocks: [HeroBlock, ServicesBlock, AlbumBlock, AboutBlock, TeamBlock, PortfolioBlock, ContactBlock],
      required: true,
    },
  ],
}
