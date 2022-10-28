import React, { ComponentType } from 'react';
import CoreComponentConfig from '../config/coreComponentConfig';

type Props = {
    componentConfig: {
        features: { feature: React.FC<any> }[];
        renderer: ComponentType<any>;
        injectedFeatures?: { feature: React.FC<any> }[];
    };
    // BaseComponent: <T>(Component: ComponentType<T>) => any;
    featuresOptions?: { [key: string]: React.FC<any> };
    customRenderer?: ComponentType<any>;
    coreComponentKey: string;
};

const useCoreComponent = (props: Props) => {
    const { componentConfig, BaseComponent, featuresOptions, customRenderer } = props;
    const { features, renderer, injectedFeatures } = componentConfig;

    // Insert Renderer
    let Component = BaseInjector(customRenderer ?? renderer);

    let allFeatures = [...features];

    // Add injected features
    if (injectedFeatures && injectedFeatures.length > 0) {
        allFeatures = [...features, ...injectedFeatures];
    }

    // Make sure we have features
    if (allFeatures.length > 0) {
        allFeatures.forEach(({ feature }: { feature: React.FC<any> }) => {
            // Add feature to the component
            (Component as any) = feature(Component);
        });
    }

    // Insert base here so features overwrite base methods and props
    Component = BaseComponent(Component);
    // Component = Base(Component);

    return Component;
};

export default useCoreComponent;

function BaseInjector<T extends JSX.IntrinsicAttributes>(Renderer: ComponentType<T>) {
    return (props: T) => {
        return <Renderer {...props} />;
    };
}
