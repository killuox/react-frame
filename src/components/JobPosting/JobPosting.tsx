import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
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

function JobPostingBase<T>(Component: ComponentType<T>) {
    return (props: JobPostingPropsType) => {
        // Logic here
        const [viewCount, setViewCount] = useState(0);
        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return (
            <Component {...(props as T)}  onDetailsClick={onDetailsClick} viewCount={viewCount} />
        );
    };
}

export const JobPosting: (props: JobPostingPropsType) => JSX.Element = (props: JobPostingPropsType) => {
    const Component = useFeatures({
        componentConfig: CoreComponentConfig.configs['JobPosting'],
        BaseComponent: JobPostingBase,
        featuresOptions: featuresOptions,
        customRenderer: props.renderer,
    });

    return <Component {...props} />;
};
