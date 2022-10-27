import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
import { JobPostingType } from './config';
import { withFavorite } from './functionality/favorite/withFavorite';
import { withLike } from './functionality/like/withLike';

const featuresOptions = {
    withFavorite: withFavorite,
    withLike: withLike,
} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

function JobPostingBase<T>(Renderer: ComponentType<T>) {
    return (props: JobPostingType) => {
        // Logic here
        const [viewCount, setViewCount] = useState(0);

        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return (
            <Renderer {...(props as T)} onDetailsClicks={onDetailsClick} viewCount={viewCount} />
        );
    };
}

export const JobPosting: (props: JobPostingType) => JSX.Element = useFeatures({
    componentName: 'jobPosting',
    BaseComponent: JobPostingBase,
    featuresOptions: featuresOptions,
});
