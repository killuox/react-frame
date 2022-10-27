import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
import { FormationPropsType } from './types';
import { componentConfig } from '../../config/component';

const featuresOptions = {

} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

function FormationsBase<T>(Component: ComponentType<T>) {
    return (props: FormationPropsType) => {
        // Logic here

        const baseProps = {}
        return <Component {...(props as T)}  {...baseProps}/>;
    };
}

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentConfig: componentConfig['Formation'],
        BaseComponent: FormationsBase,
        featuresOptions: featuresOptions,
    });

    return <Component {...props} />;
};
