import React from 'react';
import { withFavorite } from '../components/JobPosting/features/favorite/withFavorite';
import { withLike } from '../components/JobPosting/features/like/withLike';

export const componentFeatures = {
    JobPosting: {
        features: ['favorite', 'like'],
        injectedFeatures: [withLike],
    },

    Formation: {
        features: [],
    },
    Formations:{
        features: ['withPopular']
    }
} as {
    [key: string]: {
        features: string[];
        injectedFeatures?: any[];
    };
};
