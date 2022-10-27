import React from 'react';
import { styled } from '@stitches/react';
import { JobPostingType } from "../config";

const Wrapper = styled('div', {
    padding: '10px',
    border: '1px solid blue',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

type Props = {
    onDetailsClick: () => void;
    viewCount: number;
    test: 'test';
};

const JobPostingRenderer = (props: Props & JobPostingType) => {
    const { title, css, description, company, onCompanyClick, onDetailsClick, viewCount } = props;
    return (
        <Wrapper css={{ ...css }}>
            <h1>{title}</h1>
            <p>View count: {viewCount}</p>
            <p>{description}</p>
            {company && (
                <>
                    <span>{company}</span>
                    <button onClick={onCompanyClick}>View Company</button>
                </>
            )}
            <br />
            <br />
            <button onClick={onDetailsClick}>View Details</button>
        </Wrapper>
    );
};

export default JobPostingRenderer;
