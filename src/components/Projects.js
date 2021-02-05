import React from 'react';
import { Container,Row} from 'react-bootstrap';
import '../css/Projects.css';
import Card from "./Cards";
import {projects} from "../data.json";





function Projects () {

   

    return (
        
            <Container pt={5}>
                <h2>PROJECTS</h2>
                <Row >
                    
                    {
                        projects.map(project => <Card key = {project.id} picture = {project.image_urls[0]} title = {project.project_name} id = {project.id} /> )
                    }
                    
                </Row>
            </Container>

      
    )

}

export default Projects;