import React from 'react';
import { Card,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Projects.css';





function Cards (props) {



    return (
        <Col lg={4} className = "cardContainer" >
            <Card
                bg= 'dark'
                key={props.id+1}
                text='white'
                style={{ width: '20rem' }}
                className="mb-3"
            >        
                <Card.Img variant="top" src={props.picture} alt={props.title}/>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
          
                            <Link to={`/projectdetail/${props.id}`} className="stretched-link"></Link>               
                    </Card.Body>
                    
            </Card>
        </Col>

      
    )

}

export default Cards;