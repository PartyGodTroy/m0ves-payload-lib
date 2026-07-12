'use server'

import type { StandardSiteResponse } from '@/lib/StandardSiteResponse'
import { getNavigationData } from './operations'
import type { Nullable } from '@/lib/Nullable'
import type { SanitizedConfig } from 'payload'

export async function getNavigationAction<T>(config:SanitizedConfig): Promise<StandardSiteResponse<Nullable<T>>> {
  const navigation = await getNavigationData(config)
  const messages: string[] = []
  const success = navigation != null && navigation != undefined
  let hint_http = success ? 200 : 500
  return {
    data: navigation as T,
    domain: 'Navigation',
    success,
    error: !success,
    messages,
    hint_http,
  }
}
