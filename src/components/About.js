import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <div id='aboutt'>
        <Container>


            <Row>

                
      <Col xs={12}  className="mt-5" style={{ "textAlign": "center" }}>


                <div >
                    <h1>
                        ABOUT ME
                    </h1>
                    <p> A profile overview and summaty of my career so far </p>
                </div>

      </Col>






            </Row>

            <Row  >


      <Col xs={6} className="mt-5" >
      <h1 style={{fontSize: "30px" ,fontWeight: "bolder", textDecoration: "underline"}}> Brief  Personal  Summary</h1>

      <p> 

      A positive, innovative, results-driven Junior Software Developer with 2 years of experience in front end development and who takes pride in the ability to effectively combine workplace objectives with personal and professional goals.I am extremely versatile in multiple dvelopment stacks as well.
        </p>

           
      
        
        </Col>


        <Col xs={6} className="mt-5" >
        <h1 style={{fontSize: "30px" ,fontWeight: "bolder",textDecoration: "underline"}}> I have always loved code</h1>
      <p>
      I am a Supportive and enthusiastic team player dedicated to efficiently achieving and surpassing my project goals. I aspire to willingly be  innovative and learn new technologies as well. I am also a  quick learner who is  passionate about development.

      </p>
        
     
        
        </Col>

        
       


        
        
     
        
      </Row>

   


     <Row style={{"textAlign": "center"}}>

     <Col xs={12} className="mt-5" >
        <h1 style={{fontSize: "30px" ,fontWeight: "bolder", textDecoration: "underline" , }}> My profeciencies</h1>
      <p >
      My skills are, but not limited to: HTML5, CSS3,Vanilla Javascript, Mongo DB, BOOTSTRAP v4, BOOTSTRAP V5,React-BOOTSTRAP , Visual Studio among others. I also posses excellent Customer Service etiquette, i am a Creative thinker, i am dependable as well as being a team player.
      </p>
        
     
        
        </Col>

     </Row>


      <Row className='head' style={{marginBottom: "90px",  }} >
      <Col >
        <h4 > "Very passionate about aesthetics and UI design."</h4>
        
        </Col>


      </Row>






        </Container>
    </div>
  )
}

export default About;