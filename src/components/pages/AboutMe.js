import React from 'react';
// import './App.css'; 


export default function AboutMe() {
    return (
    <div>
      <h2 className="about-txt">About Me</h2> 
      <div id="profile-picture">
          <img className="cassie-photo" src={process.env.PUBLIC_URL+'/images/IMG_3396.jpg'}  width="300px" height="400px" />
          
          <h5>Web Developer with a Passion for Enhancing Lives - Former Recreation Therapist Turned Tech Enthusiast</h5>
          
          <p>As a former recreation therapist, I have spent years dedicated to improving the lives of others through creative problem-solving and innovative approaches to healthcare. I have always been fascinated by the intersection of technology and healthcare, and I decided to take the leap and pursue a career in web development. 
          
          Currently, I am enrolled in the University of Toronto coding bootcamp where I am developing my skills in HTML, CSS, JavaScript, and much more. I am excited to continue learning and growing as a developer and to apply my background in healthcare to create meaningful, user-focused applications that can make a difference in people's lives. 
          
          In my free time, you can find me hiking with my dog or trying out new recipes in the kitchen. I am always seeking out new challenges and adventures, and I am excited to see where this new career path takes me.</p>
      </div>
    </div>
    )
  }
