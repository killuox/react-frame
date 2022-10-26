import React, { ComponentType } from 'react';
import { JobPostingType } from '../components/JobPosting/config';
import JobPostingRenderer from '../renderers/JobPostingRenderer';

export const componentConfig = {
    jobPosting: {
        renderer: JobPostingRenderer,
        features: [
            {
                name: 'favorite',
                enabled: true,
            },
            {
                name: 'like',
                enabled: true,
            },
        ],
    },
} as {
    [key: string]: {
        renderer: React.FC<any>;
        features: {
            name: string;
            enabled: boolean;
        }[];
    };
};

export const getComponentConfig = (
    componentName: string,
    //@ts-ignore
    BaseComponent: <T extends unknown>(Renderer: ComponentType<T>) => (props: T | any) => JSX.Element,
    featuresOptions: { [key: string]: React.FC<any> }, 
) => {
    const Renderer = componentConfig[componentName].renderer;
    const { features } = componentConfig[componentName];

    let Component = BaseComponent(Renderer);
    
    features.forEach((feature: { name: string; enabled: boolean }) => {
        if (featuresOptions[feature.name] && feature.enabled) {
            // Wrap job posting base
            // @ts-ignore
            Component = featuresOptions[feature.name](Component);
        }
    });

    return Component;
};
