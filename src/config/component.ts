import React from 'react';
import { withFavorite } from '../components/JobPosting/features/favorite/withFavorite';

export const componentFeatures = {
    JobPosting: {
        features: ['favorite', 'like'],
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
        features: string[];
        injectedFeatures?: {
            feature: any;
        }[];
    };
};