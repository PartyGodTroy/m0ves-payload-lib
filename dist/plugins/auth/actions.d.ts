import type { StandardSiteResponse } from "@/lib/StandardSiteResponse";
import type { SanitizedConfig } from "payload";
export declare function LoginAction<T>(formData: FormData, config: SanitizedConfig): Promise<StandardSiteResponse<T>>;
export declare function RegisterAction<T>(formData: FormData, config: SanitizedConfig): Promise<StandardSiteResponse<T>>;
