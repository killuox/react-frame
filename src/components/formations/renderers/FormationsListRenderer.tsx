import React from 'react';
import { styled } from '@stitches/react';
import { FormationsListType } from '../config';
import { FormationType } from '../config';
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


const FormationsRenderer = (props: FormationsListType) => {
    const { formations, css } = props;
    console.log(props)
    return (
        <Wrapper css={{ ...css }}>
            {props.popularDom}

            <h2>Formations List</h2>
            <List>
            {formations.map((formation: FormationType, index : number) => {                
                return <FormationRenderer key={index} {...formation}/>;
            })}
            </List>
        </Wrapper>
    );
};

export default FormationsRenderer;
