import { type SanitizedConfig } from 'payload';
import { type StandardSiteResponse } from '@/lib/StandardSiteResponse';
export declare function LoginWithEmail<T>({ email, password, config }: {
    email: string;
    password: string;
    config: SanitizedConfig;
}): Promise<StandardSiteResponse<T>>;
export declare function SignUpWithEmail<T>({ email, password, confirmPassword, config }: {
    email: string;
    password: string;
    confirmPassword: string;
    config: SanitizedConfig;
}): Promise<StandardSiteResponse<T>>;
