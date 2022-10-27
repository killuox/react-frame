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

    // Make sure it has features options
    if (featuresOptions) {
        features.forEach(({ name, enabled }: { name: string; enabled: boolean }) => {
            if (featuresOptions[name] && enabled) {
                // Wrap base component with injected feature
                (Component as any) = featuresOptions[name](Component);
            }
        });
    }

    return Component;
};

export default useFeatures;
