import React from 'react';
import { styled } from '@stitches/react';
import { FormationRenderType } from '../types';

const Wrapper = styled('div', {
    fontSize: '13px',
    padding: '10px',
    border: '1px solid lightgray',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
    '.view-btn': {
        color: 'white',
        backgroundColor: 'LightCoral',
    },
});

const FormationRenderer = (props: FormationRenderType) => {
    const {
        title,
        css,
        description,
        date
    } = props;

    return (
        <Wrapper css={{ ...css }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <br />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <button className="view-btn">
                    View details
                </button>
                <span>Date: {date}</span>
            </div>
        </Wrapper>
    );
};

export default FormationRenderer;
