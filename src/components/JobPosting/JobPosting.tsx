import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useCoreComponent';
import { JobPostingPropsType } from './types';
import { withFavorite } from './features/favorite/withFavorite';
import { withLike } from './features/like/withLike';
import { componentConfig } from '../../config/component';

import { CoreComponentConfig } from '../../config/coreComponentConfig';

const featuresOptions = {
    favorite: withFavorite,
    like: withLike,
} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

export const JobPosting: (props: JobPostingPropsType) => JSX.Element = (props: JobPostingPropsType) => {
    const Component = useFeatures({
        componentConfig: CoreComponentConfig.configs['JobPosting'],
        featuresOptions: featuresOptions,
        customRenderer: props.renderer,
        coreComponentKey: 'JobPosting',
    });

    return <Component {...props} />;
};
