import { JobPostingBase } from './JobPostingBase';
import { withFavorite } from './functionality/withFavorite';
import { withLike } from './functionality/withLike';
import { getComponentConfig } from '../../config/component';
import type * as Stitches from '@stitches/react';

export const featuresOptions = {
    favorite: withFavorite,
    like: withLike,
} as  {
    [key: string]: (Component: any) => any;
}
export type JobPostingType = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
    showHover?: boolean;
    withFavorite?: boolean;
};

export const JobPosting = getComponentConfig('jobPosting', JobPostingBase, featuresOptions);







