import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




const style = {
 
  textAlign: "center",
  padding: "20px",
  left: "0",
  top: "100",
  height: "70px",
  width: "100%",
  marginTop: "70px",
  backgroundColor: "transparent"
};

 function footer () {
  return (
    <div id="footerr" style={style} >
      



            <Row  >
            <Col xs={6} >
            < >
           
            <h1> Visit my social media platforms for more projects and insights.</h1>
                 
                     
            </>
          
                    
            </Col>
           
            <Col xs={6} className="ms-auto"   >
            < >
            <p>  <FontAwesomeIcon icon={faFacebook} /> </p>
            <p>  <FontAwesomeIcon icon={faGithub} /> </p>
            <p>  <FontAwesomeIcon icon={faInstagram} />  </p>
            <p> <FontAwesomeIcon icon={faTwitter} />  </p>
                   
            
            </>
          
                    
            </Col>

            <Col>
            <>
            <h2 style={{textDecoration: "underline" , fontWeight:"bolder"}}> The Sammienator Inc 2022 © </h2>
            
            </>
            
            </Col>
       
            </Row>

    </div>
  );
}
export default footer ;