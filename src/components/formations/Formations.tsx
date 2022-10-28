import React from 'react';
import useCoreComponent from '../../hooks/useCoreComponent';
import { FormationPropsType } from '../formation/types';

export const Formations: (props: FormationPropsType) => JSX.Element = (props) => {
    
    const Component = useCoreComponent(
        'Formations',
        props,
    );
    return <Component {...props} />;
};
