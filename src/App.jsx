import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import Plus from './components/Plus/Plus';
import Job from './components/Job/Job';
import JobDetails from './components/Job/JobDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Plus />} ></Route>
          <Route exact path="/submit-cv" element={<Form />} ></Route>
           <Route exact path="/jobs" element={<Job />} ></Route>
           <Route path='/jobs/:id' element={<JobDetails/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
