import React, { ComponentType } from 'react';
import { componentFeatures } from '../config/component';
import CoreComponentConfig from '../config/coreComponentConfig';

const useCoreComponent = (
    coreComponentKey: string,
    props: any,
    featuresOptions: { [key: string]: React.FC<any> },
) => {
    const { BaseComponent, renderer } = CoreComponentConfig.getComponentConfig(coreComponentKey);

    const EnabledFeatures = CoreComponentConfig.getEnabledFeatures(coreComponentKey);
    const injectedFeatures  = CoreComponentConfig.getInjectedFeatures(coreComponentKey);

    // Insert Renderer
    let Component = BaseInjector(props.renderer ?? renderer);

    const features = EnabledFeatures.map((feature: string) => {
        return featuresOptions[feature];
    });

    let allFeatures = [...features];

    // Add injected features
    if (injectedFeatures && injectedFeatures.length > 0) {
        allFeatures = [...features, ...injectedFeatures];
    }

    // Make sure we have features
    if (allFeatures.length > 0) {
        allFeatures.forEach((feature: any) => {
            console.log(features);
            // Add feature to the component
            (Component as any) = feature(Component);
        });
    }

    // Insert base here so features overwrite base methods and props
    Component = BaseComponent(Component);

    return Component;
};

export default useCoreComponent;

function BaseInjector<T extends JSX.IntrinsicAttributes>(Renderer: ComponentType<T>) {
    return (props: T) => {
        return <Renderer {...props} />;
    };
}
