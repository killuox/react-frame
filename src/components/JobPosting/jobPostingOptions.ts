import { JobPostingBase } from './JobPostingBase';
import { withFavorite } from './functionality/withFavorite';
import { withLike } from './functionality/withLike';
import { getComponentConfig } from '../../config/component';
import type * as Stitches from '@stitches/react';

export namespace JobPosting {
    export const featuresOptions = {
        favorite: withFavorite,
        like: withLike,
    } as any;

    export const JobPostingComp = getComponentConfig('jobPosting', JobPostingBase, featuresOptions);
    
    export const featuresConfig = [
        {
            name: 'favorite',
            enabled: false,
        },
        {
            name: 'like',
            enabled: true,
        },
        {
            name: 'share',
            enabled: false,
        },
    ];

    export type JobPostingType = {
        title: string;
        css?: Stitches.CSS;
        description: string;
        company?: string;
        onCompanyClick?: () => void;
    };
}
