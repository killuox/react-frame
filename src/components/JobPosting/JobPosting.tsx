import useCoreComponent from '../../hooks/useCoreComponent';
import { JobPostingPropsType } from './types';

export const JobPosting: (props: JobPostingPropsType) => JSX.Element = (
    props: JobPostingPropsType,
) => {
    const Component = useCoreComponent('JobPosting', props);

    return <Component {...(props as any)} />;
};
