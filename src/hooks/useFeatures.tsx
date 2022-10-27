import React from 'react';
import { componentConfig } from '../config/component';

type Props = {
    componentName: string;
    BaseComponent: <T>(Renderer: React.ComponentType<T>) => (props: any) => JSX.Element;
    featuresOptions?: { [key: string]: React.FC<any> };
};

const useFeatures = (props: Props) => {
    const { componentName, BaseComponent, featuresOptions } = props;

    const Renderer = componentConfig[componentName].renderer;
    const { features } = componentConfig[componentName];
    
    // Insert Renderer
    let Component = BaseComponent(Renderer);

    if (featuresOptions) {
        features.forEach((feature: { name: string; enabled: boolean }) => {
            if (featuresOptions[feature.name] && feature.enabled) {
                // Wrap job posting base component with feature component
                (Component as any) = featuresOptions[feature.name](Component);
            }
        });
    }
  
    return Component;
};

export default useFeatures;
