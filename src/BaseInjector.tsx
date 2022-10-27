import React, {ComponentType} from 'react'

export function BaseInjector<T extends  JSX.IntrinsicAttributes>(Renderer: ComponentType<T>) {
    return (props: T) => {
        return <Renderer {...props} />;
    };
}