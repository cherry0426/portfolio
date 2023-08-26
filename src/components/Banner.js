import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumePdf from '../assets/resume.pdf';
import { HashLink } from 'react-router-hash-link';
import headerImg from "../assets/header.jpg";
import 'animate.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Border, BorderOuter } from "react-bootstrap-icons";


export const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'resume.pdf';
      link.click();
    };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Data Analyst", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(45);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={10} md={6} xl={7}>
                <span className="tagline">Ananya Katpally</span>
                <h1>{"I'm a,"} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}<br/></span></span></h1>
                <p>⭐ Hi there! Welcome to my digital realm, where every line of code and every pixel is a masterpiece in the making. Let's embark on a journey through the bytes and pixels that shape our world.<br/>
                ⭐ A Computer Science Student who is passionate about building and enhancing software products.
                  I'm also an artist and a book worm, I love reading books! I live in Dallas, Texas.</p><br/>
                <span className="tagline-resume">
                <HashLink to='#connect'>
                  <button className="vvd" id="resume" onClick={handleDownload}><span>Resume</span></button>
                </HashLink>
                </span>
          </Col>
          <Col xs={11} md={6} xl={4} className="d-flex justify-content-end">
          <div className="image-container">
          <img src={headerImg} alt="Header Img" style={{ borderRadius: "50%", width: "380px", height: "380px"}} />
          </div>
        </Col>
        </Row>
      </Container>
    </section>
  </Router>
  )
}

