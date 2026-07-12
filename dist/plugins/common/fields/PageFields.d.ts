import type { Field } from 'payload';
export declare const getCommonPageFields: ({ include_seo, include_nested_doc, include_search, include_redirects, }: {
    include_seo?: boolean | undefined;
    include_nested_doc?: boolean | undefined;
    include_search?: boolean | undefined;
    include_redirects?: boolean | undefined;
}) => Field[];
