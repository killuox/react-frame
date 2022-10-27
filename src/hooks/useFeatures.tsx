import React, {ComponentType} from 'react';
import { componentConfig } from '../config/component';

type Props = {
    componentName: string;
    BaseComponent: <T>(Component: ComponentType<T>) => any;
    featuresOptions?: { [key: string]: React.FC<any> };
};

const useFeatures = (props: Props) => {
    const { componentName, BaseComponent, featuresOptions } = props;
    const { features, renderer } = componentConfig[componentName];

    // Insert Renderer
    let Component = BaseInjector(renderer);

    // Make sure it has features options
    if (featuresOptions) {
        features.forEach(({ name, enabled }: { name: string; enabled: boolean }) => {
            if (featuresOptions[name] && enabled) {
                // Wrap base component with injected feature
                (Component as any) = featuresOptions[name](Component);
            }
        });
    }

    // Insert base here so features overwrite base methods and props
    Component = BaseComponent(Component);

    return Component;
};

export default useFeatures;


function BaseInjector<T extends  JSX.IntrinsicAttributes>(Renderer: ComponentType<T>) {
    return (props: T) => {
        return <Renderer {...props} />;
    };
}