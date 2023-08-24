import React from "react";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"

export const Skills = () => {
    return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Tech Stack</h2>
            <ul className="skills-list">
              <li>Python</li>
              <li>Ruby</li>
              <li>Java</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p className="about-me-paragraph">
            A Masters Degree from The University of Texas at Dallas in Computer Science, 2023.<br />
            I am a student with 4+ years of academic experience in Software Development, Object Oreinted Programming, Machine Learning. I have worked as a Software Developer Intern at <a href="https://www.copart.com/" alt="Copart">Copart</a>, Dallas, Texas for 8 months.<br/>
            I want to use my problem-solving skills to solve real world problems by building new products in technology and enhancing them.<br/>
            <ul className="strengths">
              <li>Multi-Cultural Fluency</li>
              <li>Mentorship</li>
              <li>Team Player</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}