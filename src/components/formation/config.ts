import type * as Stitches from '@stitches/react';

export type FormationType = {
    css?: Stitches.CSS;
    id: number,
    title: string,
    description: string,
    formateur?: string,
    date?: string,
    position?: string,
    isPopular?: boolean,
};