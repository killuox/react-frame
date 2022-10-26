import { ComponentType, useState } from "react";

export function withFavorite<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, 'isFavorite' | "onFavoriteClick">) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const onFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    
    return <Component {...(hocProps as T)} isFavorite={isFavorite} onFavoriteClick={onFavoriteClick} />;
  };
}