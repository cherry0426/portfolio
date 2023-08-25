import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/header.jpg";
import 'animate.css';

export const Banner = () => {
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
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={10} md={6} xl={7}>
                <span className="tagline">Hi there!</span>
                <h1>{"I'm Ananya,"} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>A Computer Science Student who is passionate about building and enhancing software products. I'm also an artist and a book worm, I love reading books! I live in Dallas, Texas.</p>
                <button onClick={() => window.location.href = 'mailto:ananya.katpally26@gmail.com?subject=Let%27s%20Connect&body=Hi%20Ananya,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,%0A[Your%20Name]'}
                >Mail Me!<ArrowRightCircle size={28} /></button>
          </Col>
          <Col xs={11} md={6} xl={4} className="d-flex justify-content-end">
          <div className="image-container">
            <img src={headerImg} alt="Header Img" width = "300px" height = "385px" style={{ borderRadius: "50%", width: "370px", height: "370px" }} />
          </div>
        </Col>
        </Row>
      </Container>
    </section>
  )
}

