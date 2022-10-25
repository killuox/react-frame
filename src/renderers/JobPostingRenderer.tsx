import React from 'react';
import { styled } from '@stitches/react';
const Wrapper = styled('div', {
    fontSize: '13px',
    padding: '10px',
    border: '1px solid red',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
    ".view-btn": {
        color: "red",
        backgroundColor: "blue",
    }
});

type Props = {
    title: string;
    css?: React.CSSProperties;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
    onDetailsClick: () => void;
    viewCount: number;
};

const JobPostingRenderer = (props: Props) => {
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
            <button className='view-btn' onClick={onDetailsClick}>View Details</button>
        </Wrapper>
    );
};

export default JobPostingRenderer;
