import React, { ComponentType } from 'react';
import useFeatures from '../../hooks/useCoreComponent';
import { FormationPropsType } from '../formation/types';
import { withPopular } from './features/withPopular';
import { componentConfig } from '../../config/component';

const featuresOptions = {
    withPopular
} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentConfig: componentConfig['Formations'],
        featuresOptions: featuresOptions,
        coreComponentKey: 'Formations',
    });

    return <Component {...props} />;
};
