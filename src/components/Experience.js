import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export const Experience = () => {
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
    color: '#fff', // Set font color of inactive tabs
    border: 'none', // Remove border
    borderRadius: '5px', // Add border radius
    margin: '0 0px', // Add margin between tabs
  };

  return (
    <section className="expeience" id="experiences">
    <div style={containerStyle}>
      <div style={{ width: 960, padding: 50, marginBottom: 60}}>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
          style={{fontSize: 18}}
        >
          <Tab eventKey="home" title="Copart Inc." style={customTabStyle}>
            <div style={tabContentStyle}>
            Software Engineer Intern (May 2022-January 2023)
            <ul className="section-title-ul">
        <li>Worked on automating form generation and document management, saving $100K per year for the company.</li>
           <li>Developed REST API microservices for Front-end applications and business logic using Ruby on Rails for 
            Back-End and JavaScript, ReactJS for the Front-End.</li>
           <li>Utilized MySQL database and Redis cache to support the backend.</li>
           <li>Peer code review, Jenkins build creation, debugging Solr issues, fixing bugs in QA and production to resolve 10% 
             of open defects and implement new functionalities.</li>
          </ul>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="The University of Texas at Dallas" style={customTabStyle}>
            <div style={tabContentStyle}>
            Graduate Student Assistant, Computer Science Department
            <ul className="section-title-ul">
           <li>Graded assignments for CS2337 Programming in Java and CS1337 Programming in C++ courses.</li>
           <li>Assisted the professor in teaching classes and provided guidance to students.</li>
           <li>Collaborated with faculty members on research projects, conducting literature reviews and data analysis.</li>
         </ul>
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Ample IT" style={customTabStyle}>
            <div style={tabContentStyle}>
            Software Engineer Intern
            <ul className="section-title-ul">
           <li>Developed software for a Machine Learning model to verify, digitize, structure, and correlate scanned paper
             belonging to shipments for the trucking industry, reducing manual work by 90%.</li>
          <li>Designed the Chargird OCR approach to better understand the structure of 2D documents using TensorFlow and
             Pytesseract for document analysis.</li>
         </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    </section>
  );
};

