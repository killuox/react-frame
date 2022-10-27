import React, { ComponentType, useState } from 'react';
import useFeatures from '../../hooks/useFeatures';
import { FormationPropsType } from '../formation/types';
import { FormationsListPropsType } from './types';
import { withPopular } from './features/withPopular';
import { componentConfig } from '../../config/component';

import data from '../../data.json';

const featuresOptions = {
    withPopular
} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

function FormationsBase<T>(Component: ComponentType<T>) {
    return (props: FormationsListPropsType) => {
        // Logic here
        const [formations, setFormations] = useState(data.formations)

        const baseProps = {
            formations,
        }
        return <Component {...(props as T)}  {...baseProps}/>;
    };
}

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    const Component = useFeatures({
        componentConfig: componentConfig['Formations'],
        BaseComponent: FormationsBase,
        featuresOptions: featuresOptions,
    });

    return <Component {...props} />;
};
