import type * as Stitches from '@stitches/react';

export type JobPostingType = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
}