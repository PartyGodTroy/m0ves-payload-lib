import { headers as getHeaders } from 'next/headers.js'
import { getPayload, type SanitizedConfig } from 'payload'
import { type StandardSiteResponse } from '@/lib/StandardSiteResponse'
import { validatePassword } from './passwordRules'

export async function LoginWithEmail<T>({
  email,
  password,
  config
}: {
  email: string
  password: string
  config:SanitizedConfig
}): Promise<StandardSiteResponse<T>> {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  if (user) {
    return {
      domain: 'Authentication',
      data: null,
      error: true,
      success: false,
      messages: ['User already logged in'],
      hint_http: 403,
    }
  }

  const result = await payload.login({
    collection: 'users',
    data: {
      email,
      password,
    },
  })

  if (!result.user) {
    return {
      domain: 'Authentication',
      data: null,
      error: true,
      success: false,
      messages: ['Invalid credentials'],
      hint_http: 401,
    }
  }

  return {
    domain: 'Authentication',
    data: result.user as T,
    error: false,
    success: true,
    messages: ['Logged in successfully'],
    hint_http: 200,
  }
}
export async function SignUpWithEmail<T>({
  email,
  password,
  confirmPassword,
  config
}: {
  email: string
  password: string
  confirmPassword: string
  config:SanitizedConfig
}): Promise<StandardSiteResponse<T>> {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })
  if (user) {
    return {
      domain: 'Authentication',
      data: null,
      error: true,
      success: false,
      messages: ['User already logged in'],
      hint_http: 403,
    }
  }

  const { message: passwordMessage, error: passwordError } = validatePassword(
    password,
    confirmPassword,
  )

  if (passwordError) {
    return {
      domain: 'Authentication',
      data: null,
      error: true,
      success: false,
      messages: [passwordMessage],
      hint_http: 400,
    }
  }

  const newUser = await payload.create({
    collection: 'users',
    data: {
      email,
      password,
    },
  })

  if (!newUser) {
    return {
      domain: 'Authentication',
      data: null,
      error: true,
      success: false,
      messages: ['Internal Server Error Occured'],
      hint_http: 500,
    }
  }

  return {
    domain: 'Authentication',
    data: user,
    error: false,
    success: true,
    messages: ['Logged in successfully'],
    hint_http: 200,
  }
}
