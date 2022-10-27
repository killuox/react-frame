import React from 'react';
import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';

export const componentConfig = {
    JobPosting: {
        renderer: JobPostingRenderer,
        features: [
            {
                name: 'favorite',
                enabled: true,
            },
            {
                name: 'like',
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