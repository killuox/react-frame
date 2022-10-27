import React, { ComponentType } from 'react';
import { JobPostingType } from '../components/JobPosting/config';
import JobPostingRenderer from '../components/JobPosting/renderer/JobPostingRenderer';

export const componentConfig = {
    jobPosting: {
        renderer: JobPostingRenderer,
        features: [
            {
                name: 'withFavorite',
                enabled: true,
            },
            {
                name: 'withLike',
                enabled: true,
            },
        ],
    },
} as {
    [key: string]: {
        renderer: React.FC<any>;
        features: {
            name: string;
            enabled: boolean;
        }[];
    };
};