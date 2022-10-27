import { ComponentType, useState } from 'react';
import FavoriteRender from './FavoriteRender';
import { JobPostingFavoriteType } from '../../types';
import { mergeCss } from '../../../utils/css';

export function withFavorite<T extends JobPostingFavoriteType>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        // Make sure to skip feature if it is disabled
        if (hocProps.disableFavorite) {
            return <Component {...(hocProps as T)} />;
        }

        const [isFavorite, setIsFavorite] = useState<boolean>(false);

        const onFavoriteClick = () => {
            setIsFavorite(!isFavorite);
        };

        const onDetailsClick = () => {
            console.log('on Details click favorite');
        };
       
        const css= mergeCss({...hocProps.css}, {'&:hover': {
            backgroundColor: 'lightblue'},
        })
        
        console.log(hocProps.css)
        const featureProps = {
            isFavorite,
            onFavoriteClick,
            onDetailsClick,
            css,
        };

        return (
            <Component
                {...(hocProps as T & JobPostingFavoriteType)}
                {...featureProps}
                favoriteDom={<FavoriteRender {...featureProps} />}
                viewCount={null}
            />
        );
    };
}
