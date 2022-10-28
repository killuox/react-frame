import React, { ComponentType } from 'react';
import useFeatures from '../../hooks/useCoreComponent';
import { FormationPropsType } from './types';

const featuresOptions = {

} as {
    [key: string]: <T>(Component: ComponentType<T>) => any;
};

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    const Component = useFeatures(
        'Formation',
        props,
    );

    return <Component {...props} />;
};
