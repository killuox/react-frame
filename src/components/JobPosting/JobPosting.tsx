import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
import { JobPostingType } from './config';
import { withFavorite } from './features/favorite/withFavorite';
import { withLike } from './features/like/withLike';
import { BaseInjector } from '../../BaseInjector';
const featuresOptions = {
    withBase: JobPostingBase,
    withFavorite: withFavorite,
    withLike: withLike,
} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

function JobPostingBase<T>(Renderer: ComponentType<T>) {
    return (props: JobPostingType) => {
        console.log(props);
        // Logic here
        const [viewCount, setViewCount] = useState(0);

        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return <Renderer {...(props as T)} onDetailsClick={onDetailsClick} viewCount={viewCount} />;
    };
}

export const JobPosting: (props: JobPostingType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentName: 'jobPosting',
        BaseComponent: BaseInjector,
        featuresOptions: featuresOptions,
    });

    return <Component {...props} />;
};
