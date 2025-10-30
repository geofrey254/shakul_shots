export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'

import Hero from '@/components/homepage/Hero'
import OurServices from '@/components/homepage/OurServices'
import Albums from '@/components/homepage/Albums'
import About from '@/components/homepage/About'
import Team from '@/components/homepage/Team'
import Portfolio from '@/components/homepage/Portfolio'
import Contact from '@/components/homepage/Contact'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    depth: 2,
    where: {
      slug: { equals: 'home-page' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <div className="page">
        {page.layout?.map((block, index) => renderBlock(block, index))}
        <Contact />
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'hero':
      return <Hero key={index} block={block} />

    case 'home-about':
      return <About key={index} block={block} />

    case 'services-block':
      return <OurServices key={index} block={block} />

    case 'album':
      return <Albums key={index} block={block} />
    
    case 'about':
      return <About key={index} block={block} />

    case 'team':
      return <Team key={index} block={block} />
      
    case 'portfolio':
      return <Portfolio key={index} block={block} />

    default:
      return null
  }
}
