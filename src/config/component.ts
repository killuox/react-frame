import React, { ComponentType } from 'react';
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
    BaseComponent: <T>(Renderer: ComponentType<T>) => (props: any) => JSX.Element,
    featuresOptions: { [key: string]: React.FC<any> },
) => {
    const Renderer = componentConfig[componentName].renderer;
    const { features } = componentConfig[componentName];

    let Component: any = BaseComponent(Renderer);

    features.forEach((feature: { name: string; enabled: boolean }) => {
        if (featuresOptions[feature.name] && feature.enabled) {
            // Wrap job posting base
            Component = featuresOptions[feature.name](Component);
        }
    });
    return Component;
};
