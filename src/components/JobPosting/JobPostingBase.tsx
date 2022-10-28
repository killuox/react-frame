import React, { ComponentType, useState, Suspense } from 'react';
import { JobPostingPropsType } from './types';

export default function JobPostingBase<T>(Component: ComponentType<T>) {
    return (props: JobPostingPropsType) => {
        // Logic here
        const [viewCount, setViewCount] = useState(0);
        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...(props as T)}  onDetailsClick={onDetailsClick} viewCount={viewCount} />
            </Suspense>
        );
    };
}