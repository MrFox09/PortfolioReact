import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Home.css';


function Home () {

    return(
        <main role="main" className="bd-masthead"> 
            <div className="jumbotron jumbotron-fluid  text-white" style={{ backgroundImage: "url(/pictures/pexels-pixabay-247671.jpg)" }}>
                <div className="container text-sm-center pt-5 fw-bolder">
                    <h1 className="display-2">Christian Fuchs</h1>
                    <p className="lead">Web/Software Developer</p>        

                </div>
            </div>
        

       
            <Container>
                <Row className = "about portfolio-me">
                    <Col>
                        <img src={"../pictures/me550x350px.jpg"} alt="me" width={550} height={350} />
                    </Col>
                    <Col>
                        <p> Hy! I am 34 years old and a lifelong learner. Currently I work for Quindoo, a IT Company and studying at Treehouse to become a better software developer. My passions are technology and sport, when I am not coding, I do some sports like hiking or climbing and much more. </p>
                        <Link to="/about"  >Learn More →</Link>
                        <br />
                        <Link to="/projects"  >My Projects →</Link>
                    </Col>
                </Row>
            </Container>
        </main>
    )
 
   
    
}

export default Home;