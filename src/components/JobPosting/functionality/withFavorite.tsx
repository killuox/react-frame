import { ComponentType, useState } from 'react';
import FavoriteRender from './FavoriteRender';
import { JobPostingType } from '../config';

export function withFavorite<T extends JobPostingType>(Component: ComponentType<T>) {

    return (hocProps: Omit<T, 'isFavorite' | 'onFavoriteClick'>) => {

        const [isFavorite, setIsFavorite] = useState<boolean>(false);
        
        // hocProps.css = {
        //     ...hocProps.css,
        //     '&:hover': {
        //         backgroundColor: 'lightGreen',
        //     },
        // };
        const onFavoriteClick = () => {
            setIsFavorite(!isFavorite);
        };
        
        const onCompanyClick=() => {
            console.log('on company click favorite');
            if(hocProps.onCompanyClick) {
                hocProps.onCompanyClick();
            }
        }

        const css = {
            ...hocProps.css,
            '&:hover': {
                backgroundColor: 'lightGreen',
            }
        }

        const featureProps = {
            isFavorite,
            onFavoriteClick,
            onCompanyClick,
            css
        };

        return (
            <Component
                {...(hocProps as T)}
                {...featureProps}
                favoriteDom={<FavoriteRender {...featureProps} />}
            />
        );
    };
}
