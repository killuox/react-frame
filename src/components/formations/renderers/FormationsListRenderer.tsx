import React from 'react';
import { styled } from '@stitches/react';
import { FormationRenderType } from '../../formation/types';
import { FormationsRenderType } from '../types';
import FormationRenderer from '../../formation/renderers/FormationRenderer';

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
});

const List = styled('div', {
    display: 'flex',
    gap: 15,
});


const FormationsRenderer = (props: FormationsRenderType) => {
    const { formations, css } = props;
    return (
        <Wrapper css={{ ...css }}>
            {props.popularDom}

            <h2>Formations List</h2>
            <List>
            {formations.map((formation: FormationRenderType, index : number) => {                
                return <FormationRenderer key={index} {...formation}/>;
            })}
            </List>
        </Wrapper>
    );
};

export default FormationsRenderer;
