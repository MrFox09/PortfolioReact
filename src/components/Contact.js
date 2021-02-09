import React,{useState} from 'react';
import { Container,Col,Row,Form,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../css/Contact.css';
import $ from "jquery";





function Contact () {

    const history = useHistory();

    const [formInput, setFormInput] = useState({});
    

    // set the formInput when changed
    const handleChange = (event) =>{
      setFormInput({...formInput, [event.target.name]: event.target.value} );
      
      
    }; 


    const handleSubmit = async (e) => {
        e.preventDefault();

        //Send email with emailJs

        var formData = new FormData();

        //appends the key and the values from the form to the new FormData object
        Object.keys(formInput).forEach(key => {

            formData.append(key,formInput[key]);

         })
        formData.append('service_id', 'service_4w797h7');
        formData.append('template_id', 'template_83eywlo');
        formData.append('user_id', 'user_eQDAsTf51VG0B3c6tZlFC');

       await $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
        });

        redirect();

    };

       // handle the redirect when the cancel button is clicked, to root route
       const redirect = () =>{ history.push('/')};



    return (
        <Container className = 'contact pt-lg-2 pt-sm-4'>
        <h2>Contact</h2>
            <Row>
                <Col lg = {9}>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group  id= "emailField">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange ={handleChange} type="email" placeholder="name@example.com" name= 'from_name' />
                    </Form.Group>

                    <Form.Group  >
                        <Form.Label>Your message</Form.Label>
                        <Form.Control onChange ={handleChange} id= "textField" as="textarea" rows={3}  name= 'message'/>
                    </Form.Group>
                    <Button className= 'custom-btn' variant="light" type = "submit" >Send</Button>
                </Form>

                

                </Col>
            </Row>
        </Container>

      
    )

}

export default Contact;