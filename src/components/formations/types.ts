import type * as Stitches from '@stitches/react';
import { FormationPropsType } from '../formation/types';

// Place all features here that you want to disable by props
export type FormationsDisableFeaturesType = {
    disableFavorite?: boolean;
};

export type FormationsListPropsType = {
    formations: Array<FormationPropsType>,
    withPopular?: boolean,
    css?: Stitches.CSS;
    popularDom?: React.ReactNode,
};

// Popular component props
export type FormationsPopularType = FormationsListPropsType & {
    popularDom: React.ReactNode,
}

// Render props (Place all props type that you pass to the renderer here)
export type FormationsRenderType = FormationsListPropsType & FormationsPopularType & FormationsDisableFeaturesType;