import React, { ComponentType, useState } from 'react';
import useRender from '../../hooks/useRender';
import { JobPostingType } from '../../config/componentTypes';

export function JobPostingBase<T>(Renderer: ComponentType<T>) {
    return (props: JobPostingType ) => {
        // Logic here
        const [viewCount, setViewCount] = useState(0);
        
        const onDetailsClick = () => {
            console.log('on detail click');
            setViewCount(viewCount + 1);
        };

        return <Renderer {...(props as T)} onDetailsClicks={onDetailsClick} viewCount={viewCount}/>;
    };
}
