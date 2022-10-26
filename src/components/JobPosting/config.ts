import { JobPostingBase } from './JobPostingBase';
import { withFavorite } from './functionality/withFavorite';
import { withLike } from './functionality/withLike';
import { getComponentConfig } from '../../config/component';
import type * as Stitches from '@stitches/react';

export const featuresOptions = {
    favorite: withFavorite,
    like: withLike,
} as any;

export const JobPosting = getComponentConfig('jobPosting', JobPostingBase, featuresOptions);

export type JobPostingType = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
};

