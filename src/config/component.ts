import React from 'react';
import { withFavorite } from '../components/JobPosting/features/favorite/withFavorite';


export const componentConfig = {
    JobPosting: {
        renderer: JobPostingRenderer,
        features: [
            // {
            //     name: 'favorite',
            //     enabled: true,
            // },
            // {
            //     name: 'like',
            //     enabled: true,
            // },
            // {
            //     name: 'share',
            //     enabled: false,
            // },
        ],
        injectedFeatures: [{
            feature: withFavorite,
        },],
            
    },
    // Formation: {
    //     renderer: FormationRenderer,
    //     features: [
            
    //     ],
    // },
    // Formations:{
    //     renderer: FormationsListRenderer,
    //     features: [
    //         {
    //             name: 'withPopular',
    //             enabled: true,
    //         }
    //     ]
    // }
} as {
    [key: string]: {
        renderer: React.FC<any>;
        features: {
            feature: any;
        }[];
        injectedFeatures?: {
            feature: any;
        }[];
    };
};