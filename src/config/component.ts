import React from 'react';
import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';

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