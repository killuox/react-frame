import JobPosting from './components/JobPosting';
import NewJobPostingRenderer from './renderers/NewJobPostingRenderer';
function App() {
    return (
        <div className="App">
            <JobPosting
                title="Software Engineer"
                description="Im a job posting description"
                company="Amazon"
                onCompanyClick={() => {
                    console.log('on company click');
                }}
                // renderer={NewJobPostingRenderer}
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
