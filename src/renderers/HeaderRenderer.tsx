import React from 'react';

type Props = {
    title: string;
    css: React.CSSProperties;
};

const HeaderRenderer = (props: Props) => {
    const { title, css } = props;
    return <h1 style={{ ...css }}>{title}</h1>;
};

export default HeaderRenderer;
