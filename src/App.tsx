import { JobPosting } from './components/JobPosting/JobPosting';
import NewJobPostingRenderer from './components/JobPosting/renderers/NewJobPostingRenderer';
import { Formations } from './components/formations/Formations';


function App() {
    return (
        <div className="App">
            <JobPosting
                title='Software Engineer'
                description="Im a job posting description"
                company="Amazon"
                disableFavorite={false}
                // renderer={NewJobPostingRenderer}
                onCompanyClick={() => {
                    console.log('on company click');
                }}
                css={{
                    border: '5px solid pink',
                    '&:hover': {
                        backgroundColor: 'lightblue',
                        "& p": {
                            color: 'white'
                        }
                    },
                    '.view-btn': {
                        border: '1px solid red',
                        backgroundColor: 'white',
                    },
                }}
            />
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <h1>Formations</h1>
                {/* <Formations />          */}
            </div>
        </div>
    );
}

export default App;
