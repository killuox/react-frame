import React from 'react';
import useRender from '../hooks/useRender';
import HeaderRenderer from '../renderers/HeaderRenderer';

type Props = {
    renderer?: (props: any) => JSX.Element;
    title: string;
    css: React.CSSProperties;
};

const Header = (props: Props) => {
    return null;
    return useRender({ name: 'header', componentProps: props });
};

export default Header;
