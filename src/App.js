import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './component/About';
import Contactme from './component/Contactme';
import Header from './component/Header';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import resumeData  from './resumeData';
import Slider from './component/slider';

function App() {
  
  return (
    <Router>
    
          <div className="App">
        <Header resumeData={resumeData}/>
        <Slider resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contactme resumeData={resumeData}/>

      </div>
      </Router>
  );
}

export default App;

