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
import NotFound from './components/NotFound';


// creates a the header component with the withRouter as a HOC to pass down match, location, history

const HeaderWithRouter = withRouter(Header);

//hoc to wrap the contents into a content div

function withContentDiv(Component) {
  return class extends React.Component {
    render() { 
      
      return <div className= "content"> <Component {...this.props} /> </div>;
    }
  }
};

// Components with Content div

const HomeWithContent = withContentDiv(Home);
const ProjectsWithContent = withContentDiv(Projects);
const ProjectDetailWithContent = withContentDiv(ProjectDetail);
const AboutWithContent = withContentDiv(About);
const ContactWithContent = withContentDiv(Contact);
const NotFoundWithContent = withContentDiv(NotFound);


function App() {

 

  return (
    <BrowserRouter>
    
      <div className ='wrapper'>

        <HeaderWithRouter />

        <Switch>          

            <Route exact path="/" component={HomeWithContent} />
            <Route path="/projects" component={ProjectsWithContent} />
            <Route path="/projectdetail/:id" component={ProjectDetailWithContent} />
            <Route path="/about" component={AboutWithContent} />
            <Route path="/contact" component={ContactWithContent} />
            <Route component={NotFoundWithContent} />       
         
        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
