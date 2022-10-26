import { JobPosting } from './components/JobPosting/config';
function App() {
    return (
        <div className="App">
            <JobPosting
                title="Software Engineer"
                description="Im a job posting description"
                company="Amazon"
                showHover={false}
                withFavorite={true}
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
