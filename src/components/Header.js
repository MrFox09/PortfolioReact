import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';




function Header (props) {

    const {location} = props;

    return (
        
            <Navbar variant= "dark"  expand="md" fixed = "top"  className = "navbar-custom">
    
                <Navbar.Toggle aria-controls="basic-navbar-nav" className= "ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav" className= " text-left" >
                    <Nav activeKey = {location.pathname} className=" ml-auto mr-5" >
                        <Nav.Link as= {Link} to="/">HOME</Nav.Link>
                        <Nav.Link as= {Link} to="/projects" >PROJECTS</Nav.Link>
                        <Nav.Link as= {Link} to="/about">ABOUT ME</Nav.Link>       
                        <Nav.Link as= {Link} to="/contact">CONTACT</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        
    )

}

export default Header;