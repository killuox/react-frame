import { ComponentType, useState } from "react";

export function withLike<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, 'isLike' | "onLikeClick">) => {
    const [isLike, setIsLike] = useState<boolean>(false);

    const onLikeClick = () => {
        setIsLike(!isLike);
    };
    
    return <Component {...(hocProps as T)} isLike={isLike} onLikeClick={onLikeClick} />;
  };
}