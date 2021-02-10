import React from 'react';
import { Container,Row,Col,Carousel} from 'react-bootstrap';
import {projects} from "./data/data.json";
import '../css/ProjectDetail.css';




function ProjectDetail({match}) {

    const id = match.params.id;

    const currentProject = {...projects[id]};


    return (


        <Container  className= "detail pt-5">
            <Row>
                <Col lg={8}>
                    <h2>{currentProject.project_name}</h2>
                    <p>{currentProject.description}</p>
                </Col>

                <Col lg={true} className= "border-left border-white mx-auto pt-3">
                <h2>Technologies</h2>
                <ul >
                    {
                        currentProject.technologies.map(skill => <li>{skill}</li>)
                    }
 
                </ul>

                <a href={currentProject.live_link} role= "button" target="_blank" rel= "noreferrer" className="btn btn-light custom-btn">DEMO</a>
                
                <a href={currentProject.github_link} role= "button" target="_blank" rel= "noreferrer" className="btn btn-light custom-btn">GITHUB</a>
                </Col>
            </Row>

            <Carousel className= "pt-5">
               
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block w-100"
                    src={currentProject.image_urls[1]}
                    alt="First slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                    className="d-block w-100"
                    src={currentProject.image_urls[2]}
                    alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval= {8000}> 
                    <img
                    className="d-block w-100"
                    src={currentProject.image_urls[3]}
                    alt="Third slide"
                    />
                   
                </Carousel.Item>
                </Carousel>
            </Container>
    );
}

export default ProjectDetail;