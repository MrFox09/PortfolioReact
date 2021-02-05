import React from 'react';
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

//import components

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';




function App() {

 

  return (
    <BrowserRouter>
    
      <div className ='wrapper'>

        <Header />

        <Switch>
          
          <div className='content'>

            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/projectdetail/:id" component={ProjectDetail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
          </div>
          

        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
