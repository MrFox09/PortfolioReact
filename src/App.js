import React from 'react';
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

//import components

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';


// creates a the header component with the withRouter as a HOC to pass down match, location, history

const HeaderWithRouter = withRouter(Header);

function App() {

 

  return (
    <BrowserRouter>
    
      <div className ='wrapper'>

        <HeaderWithRouter />

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
