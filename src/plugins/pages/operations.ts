
import { headers as getHeaders } from 'next/headers.js'
import { getPayload, type PaginatedDocs, type Config, type SanitizedConfig } from 'payload'
import { PagesCollection } from './plugin'

export async function getPageBySlug<T>(slug: string, config:SanitizedConfig) {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  return (await payload.find({
    collection: PagesCollection.slug as any,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          published: {
            equals: true,
          },
        },
      ],
    },
  })) as PaginatedDocs<T>
}

export async function getSubPages<T>(slug: string, config:SanitizedConfig) {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config })
  return await payload.find({
    collection: PagesCollection.slug as any,
    where: {
      and: [
        // Contains
        {
          slug: {
            contains: slug,
          },
        },
        // not the same page
        {
          slug: {
            not_equals: slug,
          },
        },
        // Or the home page
        {
          slug: {
            not_equals: '/',
          },
        },
      ],
    },
  }) as PaginatedDocs<T>
}
