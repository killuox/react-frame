import React, { ComponentType } from 'react';
import { componentFeatures } from '../config/component';
import CoreComponentConfig from '../config/coreComponentConfig';

const useCoreComponent = (
    coreComponentKey: string,
    props: any,
) => {
    const { BaseComponent, renderer } = CoreComponentConfig.getComponentConfig(coreComponentKey);

    const features = CoreComponentConfig.getEnabledFeaturesComponent(coreComponentKey);
    
    // Insert Renderer
    let Component = BaseInjector(props.renderer ?? renderer);

    // Make sure we have features
    if (features.length > 0) {
        features.forEach((feature: any) => {
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
