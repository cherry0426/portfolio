import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Bookshelf } from 'react-bootstrap-icons';

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
    borderRadius: '10px', // Add border radius
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
              <b>Master of Science in Computer Science specializing in Data Science</b> (August 2021 - May 2023)<br/>
              <ul>
              <li>Analysis of Algorithms and Data Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Database design</li>
              <li>MachineLearning</li>
              <li>Statistical methods for Data Science</li>
              <li>Web Programming Languages</li>
              <li>Big Data and Analysis</li>
              <li>Network Security</li>
              </ul>
              <b>GPA: 3.85</b>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="Jawaharlal Nehru Technological University"
            style={customTabStyle}
            tabClassName="custom-inactive-title"
          >
            <div style={tabContentStyle}>
            <b>Bachelor of Technology in Computer Science and Engineering</b> (August 2017 - June 2021)<br/>
              <ul>
              <li>Design and Analysis of Algorithms</li>
              <li>Data Structues</li>
              <li>Object Oriented Design</li>
              <li>Database design</li>
              <li>Cloud Computing</li>
              <li>Web Programming Languages</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              </ul>
              <b>GPA: 4.0</b>
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Certifications, Volunteering, Hobbies & Extra-Cirricular Activities" style={customTabStyle}>
            <div style={tabContentStyle}>
            <ul><b>Certifications</b>
              <li>Meta FrontEnd Developer 2023</li>
              <li>Learn to code with Ruby 2022</li>
              <li>Python for Eveybody 2020</li>
              <li>Hacker Rank Problem Solving 2020</li>
            </ul>

              <ul><b>Volunteering & Achievements</b>
            <li>Volunteered and Organized various IEEE technical workshops.</li>
            <li>Developed a Taste Analyser based on facial expressions using Deep Learning in Smart India Hackathon in 2020
              organized by the Government of India.</li>
          <li>Scored 8.5 in IELTS Speaking.</li>
          </ul>

            <ul><b>Extra-Cirricular Activities</b>
            <li>Volunteered and Organized various IEEE technical workshops.</li>
            <li>Developed a Taste Analyser based on facial expressions using Deep Learning in Smart India Hackathon in 2020</li>
             <li>organized by the Government of India.</li>
          <li>Scored 8.5 in IELTS Speaking.</li>
          </ul>

          <ul><b>Hobbies</b>
            <li>crafting my world as an artist</li>
            <li>I can sing!</li>
             <li>Reading books, you can checkout my bookshelf here: <a href="https://www.goodreads.com/user/show/101779467-ananya-reddy"
             alt="Bookshelf">Bookshelf</a></li>
          </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    </section>
  );
};
