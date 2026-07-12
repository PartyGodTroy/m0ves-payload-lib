import { type SanitizedConfig } from 'payload';
import type { Metadata, ResolvingMetadata } from 'next';
import type { RouteProps } from '../../lib/RouteProps';
/**
 * Renders Pages
 * @param param0
 * @returns
 */
export default function PageRenderer<T>({ params, searchParams, config }: RouteProps<{
    slug: string;
}> & {
    config: SanitizedConfig;
}): Promise<import("react").JSX.Element>;
export declare function generatePageMetadata<T>({ params, searchParams, config }: RouteProps<{
    slug: string;
}> & {
    config: SanitizedConfig;
}, parent: ResolvingMetadata): Promise<Metadata>;
