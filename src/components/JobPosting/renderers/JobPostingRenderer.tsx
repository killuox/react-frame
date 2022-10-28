import React, {Suspense} from 'react';
import { styled } from '@stitches/react';
import { JobPostingRenderType } from '../types';

const Wrapper = styled('div', {
    fontSize: '13px',
    padding: '10px',
    border: '1px solid red',
    '&:hover': {
        backgroundColor: 'lightgray',
        "& p": {
            color: 'red',
        },
    },
    '.view-btn': {
        color: 'red',
        backgroundColor: 'blue',
        "& p": {
            color: 'green',
        },
    },
});

const JobPostingRenderer = (props: JobPostingRenderType) => {
    const {
        title,
        css,
        description,
        company,
        onCompanyClick,
        onDetailsClick,
        viewCount,
        favoriteDom,
        isLiked, 
    } = props;
    
    return (
     

        <Wrapper css={ css  }>
            <h1>{title}</h1>
            {viewCount && <p>View count: {viewCount}</p>}
            <p>{description}</p>
            {isLiked && <p>This post is liked by you</p>}
            {company && (
                <>
                    <span>{company}</span>
                    <button onClick={onCompanyClick}>View Company</button>
                </>
            )}
            <br />
            <br />
            {favoriteDom}
            <button className="view-btn" onClick={onDetailsClick}>
                View Details
                <p>im the paragraph</p>
            </button>
        </Wrapper>
       
    );
};

export default JobPostingRenderer;
