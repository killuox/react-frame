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

export type FormationsListType = {
    formations: Array<FormationType>,
    withPopular?: boolean,
    css?: Stitches.CSS;
    popularDom?: React.ReactNode,
};

