import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
import { FormationType } from './config';
import { componentConfig } from '../../config/component';

import data from '../../data.json';

const featuresOptions = {

} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

function FormationsBase<T>(Component: ComponentType<T>) {
    return (props: FormationType) => {
        // Logic here

        const baseProps = {}
        return <Component {...(props as T)}  {...baseProps}/>;
    };
}

export const Formations: (props: FormationType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentConfig: componentConfig['Formation'],
        BaseComponent: FormationsBase,
        featuresOptions: featuresOptions,
    });

    return <Component {...props} />;
};
