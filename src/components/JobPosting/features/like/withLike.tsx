import { ComponentType, useState } from 'react';
import { JobPostingLikeType } from '../../types';
export function withLike<T extends JobPostingLikeType>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const [isLiked, setIsLiked] = useState<boolean>(true);

        const onLikeClick = () => {
            setIsLiked(!isLiked);
        };

        return <Component {...(hocProps as T & JobPostingLikeType)} isLiked={isLiked} onLikeClick={onLikeClick} />;
    };
}
