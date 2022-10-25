import React from 'react';
import JobPostingRenderer from '../renderers/JobPostingRenderer';
import HeaderRenderer from '../renderers/HeaderRenderer';

export const componentConfig = {
    header: {
        renderer: HeaderRenderer,
        disabledProps: [],
    },
    jobPosting: {
        renderer: JobPostingRenderer,
        disabledProps: [],
    },
} as {
    [key: string]: {
        renderer: React.ComponentType<any>;
        disabledProps: string[];
    };
};
