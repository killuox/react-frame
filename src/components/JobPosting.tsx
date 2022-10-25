import React, { useState } from 'react';
import useRender from '../hooks/useRender';
import type * as Stitches from '@stitches/react';

type Props = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
    renderer?: React.FC<any>;
};

const JobPosting = (props: Props) => {
    // Logic here
    const [viewCount, setViewCount] = useState(0);
    const onDetailsClick = () => {
        console.log('on detail click');
        setViewCount(viewCount + 1);
    };

    const componentProps = { ...props, onDetailsClick, viewCount };
    return useRender({ name: 'jobPosting', componentProps: componentProps });
};

export default JobPosting;
