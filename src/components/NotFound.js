import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Col,Row} from 'react-bootstrap';
import '../css/NotFound.css';


function NotFound () {

    return(

        <Container>
            <Row>
                <Col>
                <div className= 'text-white'>
                    <h1>Not Found</h1>
                    <p>Sorry! We couldn't find the page you're looking for.</p>
                    <Link className="button" to={`/`}>Back</Link>
                </div>
                </Col>
            </Row>
        </Container>

       
        
    )   
    
}

export default NotFound;