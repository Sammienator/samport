import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';

function StripedExample() {
  return (
    <div id='progresss'  >
     
      <h1 className='heading' style={{ fontWeight: "bolder" , textAlign: "center" }}  >  Languages and frameworks i am proficient in.</h1>
      <Container className='prog' style={{textAlign: "center" }}>  
     <p><ProgressBar animated now={40} label={`Javascript`} variant="info"  />   </p> 
     <p   > "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside Html and Css.<br/> As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries"</p>


     <p><ProgressBar animated now={100} label={`Html`} variant="warning"  />   </p>
     <p> " The HyperText Markup Language or Html is the standard markup language for documents designed to be displayed in a web browser. <br/> It can be assisted by technologies such as Cascading Style Sheets (Css) and scripting languages such as JavaScript." </p>
     <p><ProgressBar animated now={95} label={`Css`} variant="success"  />   </p>
     <p >" Cascading Style Sheets (Css) is a style sheet language used for describing the presentation of a document written in a markup language such as Html or Xml. <br/> Css is a cornerstone technology of the World Wide Web, alongside Html and JavaScript. "</p>
     <p><ProgressBar animated now={90} label={`BOOTSTRAP`} variant="info"  />   </p>
     <p > "Bootstrap is a free and open-source Css framework directed at responsive, mobile-first front-end web development. <br/> It contains Html, Css and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."</p>
     <p><ProgressBar animated now={50} label={`Nodejs`}  variant="warning" />   </p>
     <p > "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine). <br/> It executes JavaScript code outside a web browser, which was designed to build scalable network applications."</p>
     <p><ProgressBar animated now={60} label={`Mongodb`} variant="success"  /> 
       </p>
     <p >" MongoDB is a source-available cross-platform document-oriented database program. <br/> Classified as a NoSqL database program, Mongodb uses Json-like documents with optional schemas."</p>
     <p><ProgressBar animated now={50} label={`Expressjs`} variant="danger"  />   </p>
     <p >" Express.js, or simply Express, is a back end web application framework for building Restful Api's with Node.js, released as free and open-source software under the MiT License.<br/> It is designed for building web applications and Api's."</p>
      

      </Container>
    </div>
  );
}

export default StripedExample;