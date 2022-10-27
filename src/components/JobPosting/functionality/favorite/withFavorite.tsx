import { ComponentType, useState } from 'react';
import FavoriteRender from './FavoriteRender';
import { JobPostingType } from '../../config';

export function withFavorite<T extends JobPostingType>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        // Make sure to skip feature if it is disabled
        if (hocProps.withFavorite === false) {
            return <Component {...(hocProps as T)} />;
        }

        const [isFavorite, setIsFavorite] = useState<boolean>(false);

        const onFavoriteClick = () => {
            setIsFavorite(!isFavorite);
        };

        const onCompanyClick = () => {
            console.log('on company click favorite');
            if (hocProps.onCompanyClick) {
                hocProps.onCompanyClick();
            }
        };

        const css = {
            ...hocProps.css,
            '&:hover': {
                backgroundColor: 'lightGreen',
            },
        };

        const featureProps = {
            isFavorite,
            onFavoriteClick,
            onCompanyClick,
            css,
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
