import React from 'react';

import '../css/Footer.css';




function Footer () {

    return (
        
        <footer className="container-fluid text-light custom-footer " id= "custom-footer">
          <div className="row ml-5  ">
            <div className="col mt-1">
              <p className="text-muted mb-0 pb-0 bold-text "> 
                <a href="https://www.facebook.com/christian.fox.796/" target="_blank" className="text-decoration-none "><span className="mx-2"><i className="fa fa-facebook" aria-hidden="true" /></span> </a>
                <a href="https://www.linkedin.com/in/christian-fuchs-2925401a8/" target="_blank" className="text-decoration-none "><span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true" /></span> </a> 
                <a href="https://www.instagram.com/chrisfoxxxx/" target="_blank" className="text-decoration-none "><span className="mx-2"><i className="fa fa-instagram" aria-hidden="true" /></span></a>
              </p>
              <small className="rights"><span>©</span> CF All Rights Reserved.</small>
            </div>
            <div className="col mt-1  ">
              <h6 className=" text-muted bold-text"><b>Email</b></h6>
              <small> <span><i className="fa fa-envelope" aria-hidden="true" /></span> <a className="text-white" href="mailto:christian.fuchs5@gmx.at">christian.fuchs5@gmx.at</a></small>
            </div>
          </div>
        </footer>
      
    )

}

export default Footer;