import type * as Stitches from '@stitches/react';

export type FormationPropsType = {
    css?: Stitches.CSS;
    id: number,
    title: string,
    description: string,
    formateur?: string,
    date?: string,
    position?: string,
    isPopular?: boolean,
};

export type FormationRenderType = FormationPropsType;