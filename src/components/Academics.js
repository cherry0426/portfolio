import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export const Academics = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const tabContentStyle = {
    padding: '20px',
    fontSize: '18px',
    color: '#ffffff', // Set font color
    lineHeight: '1.6',
  };

  return (
    <section className="academics" id="academics">
    <div style={containerStyle}>
      <div style={{ width: 960, padding: 50 }}>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="The University of Texas at Dallas">
            <div style={tabContentStyle}>
              Master of Science in Computer Science specializing in Data Science (August 2021 - May 2023)
              Courses: Analysis of Algorithms and Data Structures, Design and Analysis of Algorithms, Database design, Machine
              Learning,Statistical methods for Data Science, Web Programming Languages, Big Data and Analysis, Network Security
              GPA: 3.85
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="Jawaharlal Nehru Technological University"
          >
            <div style={tabContentStyle}>
            achelor of Technology in Computer Science and Engineering (August 2017 - June 2021)
           Courses:
           GPA: 4.0
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Extra-Curricular Activities">
            <div style={tabContentStyle}>
            Volunteered and Organized various IEEE technical workshops.
           Developed a Taste Analyser based on facial expressions using Deep Learning in Smart India Hackathon in 2020
             organized by the Government of India.
          Scored 8.5 in IELTS Speaking.
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    </section>
  );
};
