'use server'

import type { StandardSiteResponse } from "@/lib/StandardSiteResponse"
import type { SanitizedConfig } from "payload"
import { LoginWithEmail, SignUpWithEmail } from "./operations"


export async function LoginAction<T> (formData: FormData, config:SanitizedConfig): Promise<StandardSiteResponse<T>> {
  const email = formData.get('email')
  const password = formData.get('password')
  const result = await LoginWithEmail<T>({ email: email as string, password: password as string, config })
  return result
}

export async function RegisterAction<T> (formData: FormData, config:SanitizedConfig): Promise<StandardSiteResponse<T>> {
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  const result = SignUpWithEmail<T>({
    email: email as string,
    password: password as string,
    confirmPassword: confirmPassword as string,
    config
  })

  return result
}
