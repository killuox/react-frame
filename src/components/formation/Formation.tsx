import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useCoreComponent';
import { FormationPropsType } from './types';
import { componentConfig } from '../../config/component';

const featuresOptions = {

} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentConfig: componentConfig['Formation'],
        featuresOptions: featuresOptions,
        coreComponentKey: 'Formation',
    });

    return <Component {...props} />;
};
