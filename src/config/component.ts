import React from 'react';
import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';
import FormationRenderer from '../components/formation/renderers/FormationRenderer';
import FormationsListRenderer from '../components/formations/renderers/FormationsListRenderer';

export const componentConfig = {
    JobPosting: {
        renderer: React.lazy(() => import('../components/JobPosting/renderers/JobPostingRenderer')),
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
    Formation: {
        renderer: FormationRenderer,
        features: [
            
        ],
    },
    Formations:{
        renderer: FormationsListRenderer,
        features: [
            {
                name: 'withPopular',
                enabled: true,
            }
        ]
    }
} as {
    [key: string]: {
        renderer: React.FC<any>;
        features: {
            name: string;
            enabled: boolean;
        }[];
    };
};