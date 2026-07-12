import { type PaginatedDocs, type SanitizedConfig } from 'payload';
export declare function getPageBySlug<T>(slug: string, config: SanitizedConfig): Promise<PaginatedDocs<T>>;
export declare function getSubPages<T>(slug: string, config: SanitizedConfig): Promise<PaginatedDocs<T>>;
