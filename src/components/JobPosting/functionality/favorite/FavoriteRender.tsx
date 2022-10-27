import React from 'react';
import { styled } from '@stitches/react';
const Wrapper = styled('div', {
color: 'red'
});
type Props = {
    isFavorite: boolean;
    onFavoriteClick: () => void;
};

const FavoriteRender = (props: Props) => {
    return (
        <Wrapper onClick={props.onFavoriteClick}>{props.isFavorite ? 'Unfavorite' : 'Favorite'}</Wrapper>
    );
};

export default FavoriteRender;
