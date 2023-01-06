import React from 'react'
import pic1 from '../assets/pic1.jpg'

const Jum = () => {
  return (
    <div className='backg'>
        <div class="container-fluid bg-light p-5" style={{"textAlign": "center"}}>
         <div>
         <img src={pic1.jpg} alt='my pic' />
         </div>
	  <h1 class="display-4">This is my PORTFOLIO</h1>
	  <p class="lead">This is  a jumbotron created using the bootstrap 5</p>
	  <hr class="my-4"/>
	  <p> I am a responsible, self-motivated person, greatly expereienced from working in diverse
          environments, and an individual who aspires to achieve both organisational and personal goals
          that may be presented to me. I have just over  2 and a half years of
          experience as a junior software developer . As a self taught developer, I
          have contributed to over a dozen projects and repositories through out career. I have attended multiple 
          BOOTcamps and internships such as GOOGLE Africa Developer scholarship (GADS) Andela Community among others, and this is where I was able to hone and refine my developer skills .</p>
	  <a class="btn btn-primary btn-lg" href="http://mypic" role="button">Learn more</a>
	</div>
    </div>
  )
}

export default Jum;