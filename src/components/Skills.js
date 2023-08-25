import React from "react";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"

export const Skills = () => {
    return (
    <section className="skill" id="skills">
      <div className="container">
          <div className="col-md-8">
          <div className="text-center">
            <h4 className = "col-header"><b>🚀 Launching Dreams into Pixels </b></h4>
            </div>
            <p className="about-me-paragraph">
            Greetings! I'm Ananya, and I'm not just a software enthusiast - I'm a <b>passionate problem solver</b> driven by a
            relentless pursuit of innovation, with a <b>Master's Degree in Computer Science from UTD with a GPA of 3.85.</b><br/>
            I've honed my skills in areas ranging from cutting-edge algorithms to intuitive user experiences.<br/><br/>
            👩‍💻 I also worked as a <b>Software Engineer Intern at <a href="https://www.copart.com/" alt="Copart">Copart</a> at
             Dallas, Texas for 8 months</b> and also as a Graduate Teaching Assistant at The University of Texas at Dallas, Computer
             Science Department.<br/>

            <ul className="strengths">
              <li>Strategic Thinker</li>
              <li>Data Wizardry</li>
              <li>Version Control Virtuoso</li>
              <li>Collaborative Spirit</li>
              <li>Crafting Experiences</li>
              <li><b>Portfolio Highlights:</b> From COVID-19 Project that was developed in 2020 for a social cause
                harnessing Machine Learning, AI for predictive analysis to – my portfolio showcases results that speak
                louder than words.</li>
            </ul>

            🌟 <b>Let's Connect!</b><br/>
            I'm not just looking for a job; I'm on a mission to contribute to transformative projects that make a difference.
            If you're seeking a dynamic problem solver with a passion for innovation and a track record of delivering tangible results,
            let's connect and explore the possibilities together!
            </p>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}