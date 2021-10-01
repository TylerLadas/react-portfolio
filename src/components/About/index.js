import React from 'react';
import tyler from "../../assets/about/tyler.jpg"


function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={tyler} alt="Tyler Ladas" />
      <p>
        Hi, I'm Tyler. I am an aspiring web developer. I live in Ottawa, Ontario Canada with my wife and daughter. 
        Previously, I worked in healthcare as a Anesthesia Assistant and Respiratory Therapist.
        I am ready for a change and to begin the next exciting chapter of my life. Becoming a web developer will allow 
        me to combine skills and passions in order to bring projects to life in a dynamic, visually appealing medium. 
        Some of my other interests include cooking and gardening. I am excited for what the future holds!
      </p>
    </section>
  );
}

export default About;