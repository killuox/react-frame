import { JobPosting } from './components/JobPosting/JobPosting';
import { Formations } from './components/formations/Formations';


function App() {
    return (
        <div className="App">
            <JobPosting
                title='Software Engineer'
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
            <div style={{ display: 'flex', flexDirection: "column" }}>

                <h1>Formations</h1>
                <Formations />        
                
            </div>
        </div>
    );
}

export default App;
