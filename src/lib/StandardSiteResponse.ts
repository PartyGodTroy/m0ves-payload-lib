export interface StandardSiteResponse<T> {
  domain: string
  error: boolean
  success: boolean
  messages: string[]
  data: T | null
  hint_http?: number
}
