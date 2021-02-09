import React from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import '../css/About.css';



function About () {

    return(

        <Container className = "pt-lg-2 pt-sm-4 about text-white">
        <h2>About me</h2>
            <Row>
                <Col lg={8}>
                    <h3>Christian Fuchs</h3>
                    <p className= "pt-2 fs-3">Software Developer</p>
                    <img  src={"../pictures/me550x350px.jpg"} alt= "Picture of me" width="550" height="350"/>
                    <p className= "pt-4 fs-2">I am passioned about to solve problems. It's about finding the most elegant way to write a line of code which fits best into a progression, I love the challenge of finding a way and discovering solutions.</p>
                    <p className= "pt-4 fs-2">My name is Christian Fuchs, I live in Austria. Currently I work for Quindoo a IT Company as a Junior Business Consultant. In my spare time I am studying at Treehouse to strengthen my software developer skills. For me, it’s very exciting to create something new. </p>
                    <p className= "pt-4 fs-2">Back then, when I was a 10 year old kid, it was always fascinating how PCs and the software work. But couldn't find it out what's' going on there. In my early 20's when I was doing my Matura (A-Level), with a focus on media informatics, I knew that one day I want to work creatively with my PC. I am convinced that my future lies in this profession. Therefore I spend the most of my freetime to get this done.</p>
                    <p className= "pt-4 fs-2">When I have a day off, I really like hiking and go to the top of the beautiful mountains here. I can enjoy the beautiful nature there and regain some energy. I also like to climb, especially bouldering because you always have to solve a problem there too ;). This all really helps to recharge.</p>

                </Col>

                <Col lg={true} className = "border-left border-white mx-auto">
                    <h3 className="skills">Skills</h3>
                        <ul >
                            <li>JavaScript</li>                  
                            <li>HTML</li>
                            <li>CSS Layouts</li>
                            <li>SQL</li>
                            <li>Object-Oriented-Programming</li>
                            <li>C#</li>
                            <li>Express</li>
                            <li>ORM Sequelize</li>
                            <li>jQuery</li>
                            <li>Code Review</li>
                            <li>Working with GitHub</li>
                            <li>Node.js</li>
                            <li>Asynchrounous programming with JS</li>
                            <li>Debugging</li>
                            <li>Bootstrap</li>
                            <li>React</li>                            
                            <li>DevExtreme</li>
                            <li>Visual Studio, Visual Studio Code</li>
                            <li>Linux Terminal, Powershell</li>
                        </ul>

                    <a href="https://www.linkedin.com/in/christian-fuchs-2925401a8/"  role= "button" target="_blank"  className="btn btn-light custom-btn">LinkedIn</a>
                
                    <a href="https://www.github.com/MrFox09" role= "button" target="_blank" className="btn btn-light custom-btn">GITHUB</a>

                </Col>
            </Row>
     
        </Container>





    ) 
    
}

export default About;