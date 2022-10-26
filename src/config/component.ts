import React from 'react';
import JobPostingRenderer from '../renderers/JobPostingRenderer';
import HeaderRenderer from '../renderers/HeaderRenderer';
import { JobPosting } from '../components/JobPosting/jobPostingOptions';

export const componentConfig = {
    header: {
        renderer: HeaderRenderer,
    },
    jobPosting: {
        renderer: JobPostingRenderer,
        features: JobPosting.featuresConfig,
    },
} as {
    [key: string]: {
        renderer: React.FC<any>;
        features?: any;
    };
};

export const getComponentConfig = (
    componentName: string,
    BaseComponent: any,
    featuresOptions: any,
) => {
    console.log(JobPosting);
    const Renderer = componentConfig[componentName].renderer;
    const { features } = componentConfig[componentName];

    let Component = BaseComponent(Renderer);
    features.forEach((feature: any) => {
        if (featuresOptions[feature.name] && feature.enabled) {
            // Wrap job posting base
            Component = featuresOptions[feature.name](Component);
        }
    });
    return Component;
};
