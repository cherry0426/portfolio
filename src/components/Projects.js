import { Container, Row, Col} from "react-bootstrap";
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
      title: "To-Do Lists: A simple interactive website using ReactJS, like sticky notes where a user can write and store their tasks. Create APIs using Spring for new tasks, manage and delete them.",
      image: projImg1,
      link: "https://github.com/cherry0426/tasksfrontend"
    },
    {
      id: 2,
      title: "Restaurant: A website for table reservation system where customers can make reservations at their convenience, reducing phone calls, wait time and enhancing user satisfaction by 50%.",
      image: projImg2,
      link: "https://github.com/cherry0426/little-lemon-capstone"
    },
    {
      id: 3,
      title: "Stock Market prediction: RNN using LSTM for stock market prediction and ran 56 trails using different combinations of hyper-parameters to see effects its performance using past 5 years of data.",
      image: projImg3,
      link: "/project3"
    },
    {
      id: 4,
      title: "Covid 19: A predictive model to determine whether a person is affected by COVID-19 or not. Utilizes logistic regression, statistical methods to make predictions with a f1 score of 0.85.",
      image: projImg4,
      link: "/project4"
    },
    // Add more projects as needed
  ];

  const titleStyle = {
    fontFamily: "timesnewroman",
    fontSize: "20px",
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2 className="header-project">Projects</h2><br/>
        </Col>
          {projects.map(project => (
            <Col key={project.id} xs={12} md={6} lg={3} className="project-box">
              <TrackVisibility>
                {({ isVisible }) => (
                <div className={`project-content ${isVisible ? "animated fadeInUp" : ""}`}>
                  <img src={project.image} alt={`Project ${project.id}`} />
                  <h3 className="project-title" style={titleStyle}>{project.title}</h3>
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