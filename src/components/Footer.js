import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} className="text-center">
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={4} className="text-center"><p>Made by Ananya Reddy</p></Col>
          <Col sm={4} className="text-center"><p>&copy; 2023. All Rights Reserved</p></Col>
        </Row>
      </Container>
    </footer>
  )
}