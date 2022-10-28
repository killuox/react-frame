import React, { ComponentType } from 'react';
import { FormationPropsType } from './types';

function FormationsBase<T>(Component: ComponentType<T>) {
    return (props: FormationPropsType) => {
        // Logic here

        const baseProps = {}
        return <Component {...(props as T)}  {...baseProps}/>;
    };
}