'use server'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload, type SanitizedConfig } from 'payload'
import { fileURLToPath } from 'url'
import { getPageBySlug } from './operations'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import type { RouteProps } from '../../lib/RouteProps'

/**
 * Renders Pages
 * @param param0
 * @returns
 */
export default async function PageRenderer<T>({ params, searchParams, config }: RouteProps<{ slug: string }> & { config: SanitizedConfig}) {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })
  const slug = (await params).slug
  const pageQuery = await getPageBySlug<T>('/' + slug, config)
  console.log({ slug })
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  if (pageQuery.totalDocs == 0) {
    return notFound()
  }
  const page = pageQuery.docs[0]

  return (
    <>
    </>
  )
}

export async function generatePageMetadata<T>(
  { params, searchParams, config }: RouteProps<{ slug: string }> & { config: SanitizedConfig},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug

  // fetch post information
  const pageQuery = await getPageBySlug(slug, config)
  const page = pageQuery.docs[0] as T | any

  return {
    title: page?.meta?.title ?? '',
    description: page?.meta?.description ?? '',
  }
}
