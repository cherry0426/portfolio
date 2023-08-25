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
    fontSize: '17px',
    color: '#000000', // Set font color
    lineHeight: '1.6',
  };

  const customTabStyle = {
    backgroundColor: '#ffffff', // Set background color of inactive tabs
    color: '#ffffff', // Set font color of inactive tabs
    border: 'none', // Remove border
    borderRadius: '5px', // Add border radius
  };

  const customInactiveTitleStyle = {
    color: '#fff', // Set the desired title color for inactive tabs
    fontWeight: 'bold', // Add font weight or any other styles as needed
  };

  return (
    <section className="academics" id="academics">
    <div style={containerStyle}>
      <div style={{ width: 960, padding: 50 }}>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          style={{fontSize: '18px'}}
          fill
        >
          <Tab eventKey="home" title="The University of Texas at Dallas" style={customTabStyle}>
            <div style={tabContentStyle}>
              Master of Science in Computer Science specializing in Data Science (August 2021 - May 2023)<br/>
              Courses: Analysis of Algorithms and Data Structures, Design and Analysis of Algorithms, Database design, Machine
              Learning,Statistical methods for Data Science, Web Programming Languages, Big Data and Analysis, Network Security<br/>
              GPA: 3.85
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="Jawaharlal Nehru Technological University"
            style={customTabStyle}
            tabClassName="custom-inactive-title"
          >
            <div style={tabContentStyle}>
            Bachelor of Technology in Computer Science and Engineering (August 2017 - June 2021)<br/>
           Courses:<br/>
           GPA: 4.0
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Extra-Curricular Activities" style={customTabStyle}>
            <div style={tabContentStyle}>
            Volunteered and Organized various IEEE technical workshops.<br/>
           Developed a Taste Analyser based on facial expressions using Deep Learning in Smart India Hackathon in 2020<br/>
             organized by the Government of India.
          Scored 8.5 in IELTS Speaking.<br/>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    </section>
  );
};
