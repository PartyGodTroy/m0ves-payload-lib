import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, CollectionConfig, Plugin } from 'payload';
export declare const revalidatePageCache: CollectionAfterChangeHook<any>;
export declare const revalidatePageCacheDelete: CollectionAfterDeleteHook<any>;
export declare const PagesCollection: CollectionConfig;
export declare const PagesPlugin: Plugin;
