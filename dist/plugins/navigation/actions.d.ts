import type { StandardSiteResponse } from '@/lib/StandardSiteResponse';
import type { Nullable } from '@/lib/Nullable';
import type { SanitizedConfig } from 'payload';
export declare function getNavigationAction<T>(config: SanitizedConfig): Promise<StandardSiteResponse<Nullable<T>>>;
