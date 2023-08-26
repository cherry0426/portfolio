import React from "react";
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    return (
    <section className="skill" id="skills">
       <div className="text-center">
        <h2>Skills</h2>
      </div>
      <div className="cont">
    <div className="col-md-8 border-color">
    <p className="about-me-paragraph ">
      <span className="greeting">Greetings!</span> I'm Ananya, a passionate problem solver driven by a relentless pursuit of innovation.
      I hold a <span className="highlight">Master's Degree in Computer Science</span> from UTD with a GPA of 3.85.
      My expertise spans from cutting-edge algorithms to intuitive user experiences.<br/><br/>
      👩‍💻 I worked as a <span className="highlight">Software Engineer Intern at <a href="https://www.copart.com/" alt="Copart" className="link">Copart </a></span>
      in Dallas, Texas for 8 months. I also served as a Graduate Teaching Assistant at The University of Texas at Dallas,
      Computer Science Department.<br/>
      <ul className="strengths">
        <li>Strategic Thinker</li>
        <li>Data Wizardry</li>
        <li>Version Control Virtuoso</li>
        <li>Collaborative Spirit</li>
        <li>Crafting Experiences</li>
        <li>Portfolio Highlights: From a COVID-19 project developed in 2020, centered around social good, and harnessing the
          capabilities of Machine Learning and AI for predictive insights, to my portfolio that eloquently demonstrates the outcomes
          achieved.</li>
      </ul>

      🌟<span className="highlight"><a href = 'mailto:ananya.katpally26@gmail.com?subject=Let%27s%20Connect&body=Hi%20Ananya,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,%0A[Your%20Name]'>Let's Connect</a></span><br/>
      I'm not just looking for a job; I'm on a mission to contribute to transformative projects that make a difference.
      If you're seeking a dynamic problem solver with a passion for innovation and a track record of delivering tangible results,
      let's connect and explore the possibilities together!
    </p>
  </div>
</div>

    </section>
  )
}