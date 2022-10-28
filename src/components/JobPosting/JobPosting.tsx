import React, { ComponentType, useState } from 'react';
import useCoreComponent from '../../hooks/useCoreComponent';
import { JobPostingPropsType } from './types';
import { withFavorite } from './features/favorite/withFavorite';
import { withLike } from './features/like/withLike';

export const JobPosting: (props: JobPostingPropsType) => JSX.Element = (props: JobPostingPropsType) => {
    
    const Component = useCoreComponent(
        'JobPosting',
        props,
    );
 
    return <Component {...props} />;
};
