import React, { ComponentType } from 'react';
import { FormationPropsType } from './types';

export default function FormationBase<T>(Component: ComponentType<T>) {
    return (props: FormationPropsType) => {
        // Logic here

        const baseProps = {}
        return <Component {...(props as any)}  {...baseProps}/>;
    };
}