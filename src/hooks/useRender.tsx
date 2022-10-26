import React, { useMemo } from 'react';
import { componentConfig } from '../config/component';

type Props = {
    name: string;
    componentProps: any;
};

const useRender = (props: Props) => {
    const { name, componentProps } = props;
    const config = componentConfig[name];
    const { renderer, } = config;
    const Renderer = useMemo(() => formatRender(), [config, componentProps.renderer]);

    function formatRender() {
        // Remove props that are disabled by config
        // disabledProps.forEach((prop: string) => {
        //     delete componentProps[prop];
        // });
        return componentProps.renderer || renderer;
    }

    return <Renderer {...componentProps} />;
};

export default useRender;
