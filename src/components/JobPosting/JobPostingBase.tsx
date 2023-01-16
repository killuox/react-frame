import React, { ComponentType, useState, Suspense } from 'react';
import { JobPostingPropsType } from './index';

export default function JobPostingBase<T>(Component: ComponentType<T>) {
    return (props: JobPostingPropsType) => {
        // Logic here
        const [viewCount, setViewCount] = useState(0);
        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return (        
            <Component {...(props as any)}  onDetailsClick={onDetailsClick} viewCount={viewCount} />        
        );
    };
}