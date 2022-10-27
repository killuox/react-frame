import { JobPosting } from './components/JobPosting/JobPosting';
import NewJobPostingRenderer from './components/JobPosting/renderers/NewJobPostingRenderer';
function App() {
    return (
        <div className="App">
            <JobPosting
                title='Software Engineer'
                description="Im a job posting description"
                company="Amazon"
                // renderer={NewJobPostingRenderer}
                onCompanyClick={() => {
                    console.log('on company click');
                }}
                css={{
                    border: '5px solid pink',
                    '&:hover': {
                        backgroundColor: 'lightblue',
                    },
                    '.view-btn': {
                        color: 'white',
                    },
                }}
            />
        </div>
    );
}

export default App;
