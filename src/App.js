import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './component/login';
//import Dashboard from './component/Dashboard';
//import Home from './component/home';
//import Todoapp from './component/Todoapp';
//import Hooks from './component/usestate';
//import Register from './component/Register';
//import Login from './component/login';
//import CreatePost from './containers/CreatePost';
//import PostList from './containers/PostList';
import About from './component/About';
import Contactme from './component/Contactme';
import Header from './component/Header';
import Resume from './component/Resume';
//import Testimonials from './component/Testimonials';
import Portfolio from './component/Portfolio';
import resumeData  from './resumeData';
import Slider from './component/slider';

function App() {
  
  return (
    
          <div className="App">
        <Header resumeData={resumeData}/>
        <Slider resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contactme resumeData={resumeData}/>

      </div>
        
  );
}

export default App;

