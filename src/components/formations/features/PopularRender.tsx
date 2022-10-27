import React from 'react';
import FormationRenderer from '../../formation/renderers/FormationRenderer';
import { styled } from '@stitches/react';
import { FormationPropsType } from '../../formation/types';
import { FormationsPopularType } from '../types';

const List = styled('div', {
    display: 'flex',
    gap: 15,
});

type Props = {
    popularFormations: Array<FormationPropsType>;
};

const PopularRender = (props: Props) => {
    return (
        <>
          <h2>Popular Formations</h2>
            <List>
            {props.popularFormations.map((formation: FormationPropsType, index : number) => {                
                return <FormationRenderer key={index} {...formation} css={{border: "2px solid red"}}/>;
            })}
            </List>
        </>  
    );
};

export default PopularRender;
