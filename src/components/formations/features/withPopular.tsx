import { ComponentType, useState } from 'react';
import { FormationsListType } from '../config';
import PopularRender from './PopularRender';

export function withPopular<T extends FormationsListType>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        // Make sure to skip feature if it is disabled
        if (hocProps.withPopular === false) {
            return <Component {...(hocProps as T)} />;
        }

        const css = {
            ...hocProps.css,
            '&:hover': {
                backgroundColor: 'lightGreen',
            },
        };
        const popularFormations = hocProps.formations.filter(formation => formation.isPopular === true);
        const formations = hocProps.formations.filter(formation => formation.isPopular === false);

        const featureProps = {
            formations,
            css,
        };
        

        // console.log(hocProps.data.popular) // Overwrite the props of the component

        return <Component 
                {...(hocProps as T)} 
                {...featureProps} 
                popularDom={<PopularRender popularFormations={popularFormations} />}
        />;
    };
}
