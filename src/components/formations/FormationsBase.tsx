import React, { ComponentType, useState, Suspense } from 'react';
import { FormationsListPropsType } from './types';

import data from '../../data.json';

export default function FormationsBase<T>(Component: ComponentType<T>) {
    return (props: FormationsListPropsType) => {
        // Logic here
        const [formations, setFormations] = useState(data.formations)

        const baseProps = {
            formations,
        }
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...(props as T)}  {...baseProps}/>;
            </Suspense>
        )
    };
}