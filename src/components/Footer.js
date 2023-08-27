import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center"><p>&copy; Made by Ananya Reddy</p></Col>
        </Row>
      </Container>
    </footer>
  )
}