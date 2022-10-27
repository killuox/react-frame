import { ComponentType, useState } from 'react';

export function withLike<T>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const [isLike, setIsLike] = useState<boolean>(true);

        const onLikeClick = () => {
            setIsLike(!isLike);
        };

        return <Component {...(hocProps as T)} isLike={isLike} onLikeClick={onLikeClick} />;
    };
}
