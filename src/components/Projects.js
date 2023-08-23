import { Container, Row, Col, Tab} from "react-bootstrap";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import projImg4 from "../assets/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: projImg1,
      link: "/project1"
    },
    {
      id: 2,
      title: "Project 2",
      image: projImg2,
      link: "/project2"
    },
    {
      id: 3,
      title: "Project 3",
      image: projImg3,
      link: "/project3"
    },
    {
      id: 3,
      title: "Project 3",
      image: projImg4,
      link: "/project3"
    },
    // Add more projects as needed
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
        <Col xs={12} className="text-center"> 
          <h2>Projects</h2><br/>
        </Col>
          {projects.map(project => (
            <Col key={project.id} xs={12} md={6} lg={3} className="project-box">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`project-content ${isVisible ? "animated fadeInUp" : ""}`}>
                    <img src={project.image} alt={`Project ${project.id}`} />
                    <h3>{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}