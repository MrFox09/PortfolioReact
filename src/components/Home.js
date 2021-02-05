import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Home.css';


function Home () {

    return(
        <main role="main" className="bd-masthead"> 
            <div className="jumbotron jumbotron-fluid  text-white" style={{ backgroundImage: "url(/pictures/pexels-anni-roenkae-2156881.jpg)" }}>
                <div className="container text-sm-center pt-5">
                    <h1 className="display-2">Christian Fuchs</h1>
                    <p className="lead">Web/Software Developer</p>        
                    <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
                    </div>
                </div>
            </div>
        

       
            <Container>
                <Row className = "about portfolio-me">
                    <Col>
                        <img src={"../pictures/me550x350px.jpg"} alt="me" width={550} height={350} />
                    </Col>
                    <Col className= "text-white">
                        <p> Hy! I am 34 years old and a lifelong learner. Currently studying at Treehouse to become a better software developer. My passions are technology and sport, when I am not coding, I do some sports like hiking or climbing and much more. </p>
                        <Link to="/"  >Learn More →</Link>
                        <br />
                        <Link to="/projects"  >Projects →</Link>
                    </Col>
                </Row>
            </Container>
        </main>
    )
 
   
    
}

export default Home;