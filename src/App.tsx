import {JobPosting} from './components/JobPosting/JobPosting';
import NewJobPostingRenderer from './renderers/NewJobPostingRenderer';
import { withFavorite } from './components/JobPosting/functionnality/withFavorite';
const JobPostingComp = JobPosting(NewJobPostingRenderer);

function App() {
    return (
        <div className="App">
            <JobPostingComp
                title="Software Engineer"
                description="Im a job posting description"
                company="Amazon"
                onCompanyClick={() => {
                    console.log('on company click');
                }}
                css={{
                    border: '5px solid pink',
                    "&:hover": {
                        backgroundColor: 'lightblue',
                    },
                    ".view-btn": {
                        color: "white",
                    }

                }}
            />
        </div>
    );
}

export default App;
