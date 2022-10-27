import { ComponentType, useState } from 'react';
import { JobPostingLikeType } from '../../types';
export function withLike<T extends JobPostingLikeType>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const [isLike, setIsLike] = useState<boolean>(true);

        const onLikeClick = () => {
            setIsLike(!isLike);
        };

        return <Component {...(hocProps as T & JobPostingLikeType)} isLike={isLike} onLikeClick={onLikeClick} />;
    };
}
