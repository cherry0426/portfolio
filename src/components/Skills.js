import React from "react";
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    return (
    <section className="skill" id="skills">
      <Container>
      <Row>
      <Col xs={12} align="center">
       <div className="text-center">
        <h2>Launching Dreams into Code</h2>
      </div>
    <div className="cont">
    <div className="col-md-8 border-color" align="left">
    <div className="about-me-paragraph ">
      I'm Ananya, a passionate problem solver driven by a relentless pursuit of innovation.
      I hold a Master's Degree in Computer Science from UTD with a GPA of 3.85.
      My expertise spans from cutting-edge algorithms to intuitive user experiences.
      👩‍💻 I worked as a Software Engineer Intern at <a href="https://www.copart.com/" alt="Copart" className="link">Copart </a>
      in Dallas, Texas.
    </div><br/>

    <ul className="skil">
              <li>&#x25B8; Python</li>
              <li>&#x25B8; Java</li>
              <li>&#x25B8; Ruby</li>
              <li>&#x25B8; HTML/CSS</li>
              <li>&#x25B8; JavaScript</li>
              <li>&#x25B8; AWS</li>
      </ul><br/><br/>

      🌟<span className="highlight">Let's Connect</span><br/>
      <div className="let-connet">
      <p>I'm not just looking for a job; I'm on a mission to contribute to transformative projects that make a difference.
      If you're seeking a dynamic problem solver with a passion for innovation and a track record of delivering tangible results,
      let's connect and explore the possibilities together!</p>
      <button className='connect-button' onClick={() => window.location.href = 'mailto:ananya.katpally26@gmail.com?subject=Let%27s%20Connect&body=Hi%20Ananya,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,%0A[Your%20Name]'}
      >Connect!</button>
      </div>
  </div>
</div>
</Col>
</Row>
</Container>
</section>
  )
}