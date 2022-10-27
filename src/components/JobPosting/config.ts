import type * as Stitches from '@stitches/react';

export type JobPostingType = {
    onDetailsClick?: () => void;
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
    showHover?: boolean;
    withFavorite?: boolean;
    isLike?: boolean;
};