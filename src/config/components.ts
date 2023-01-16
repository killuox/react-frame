import React from 'react';
import jobPostingComponents from '../components/JobPosting';
import formationsComponents from '../components/formations';

const components = {} as {
    [key: string]: {
        base: React.ComponentType<any>;
        renderer: React.ComponentType<any>;
        features: React.ComponentType<any>[] | [];
    };
};

// Important! : Add all components here
components['JobPosting'] = jobPostingComponents;
components['Formations'] = formationsComponents;

export default components;
