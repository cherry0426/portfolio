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
    fontSize: '19px',
    margin: '-21px 0px 20px 0px',
    color: '#495057', // Set font color
    fontFamily: "helvatica",
    fontWeight: '500',
  };

  const customTabStyle = {
    backgroundColor: '#ffffff', // Set background color of inactive tabs
    color: '#ffffff', // Set font color of inactive tabs
    border: 'none', // Remove border
    borderRadius: '10px', // Add border radius
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
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <b>Software Engineer Intern</b>
            <span className="date-heading" style={{textAlign: 'right'}}><b>Dallas, Texas</b></span>
            </h5>
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <i><b>June 2022 - January 2023</b></i>
            <span className="date-heading" style={{textAlign: 'right'}}><b><i>8 months</i></b></span>
            </h5>
            <ul className="section-title-ul">
        <li>Worked on designing and developing process of Title Procurement – Automating Form Generation, Document Management and
          Ownership Transfer process of Vehicles, which would save $100K per year for the company.</li>
           <li>Learned Ruby from scratch. Developed REST API microservices with Ruby and utilized a range of SQL and NoSQL databases to support the backend.</li>
           <li>Utilized MySQL database and Redis cache to support the backend.</li>
           <li>Peer code review, Jenkins build creation, debugging Solr issues, fixing bugs in QA and production to resolve 10%
             of open defects and implement new functionalities were some of my job duties.</li>
          </ul>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="The University of Texas at Dallas" style={customTabStyle}>
            <div style={tabContentStyle}>
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <b>Graduate Student Assistant, Computer Science Department</b>
            <span className="date-heading" style={{textAlign: 'right'}}><b>Dallas, Texas</b></span>
            </h5>
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <i><b>September 2021 - May 2022</b></i>
            <span className="date-heading" style={{textAlign: 'right'}}><b><i>9 months</i></b></span>
            </h5>
            <ul className="section-title-ul">
           <li>Graded assignments for CS2337 Programming in Java and CS1337 Programming in C++ courses.</li>
           <li>Assisted the professor in teaching classes and provided guidance to students.</li>
           <li>Collaborated with faculty members on research projects, conducting literature reviews and data analysis.</li>
         </ul>
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Ample IT" style={customTabStyle}>
            <div style={tabContentStyle}>
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <b>Software Engineer Intern</b>
            <span className="date-heading" style={{textAlign: 'right'}}><b>Hyderabad, India</b></span>
            </h5>
            <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <i><b>May 2021 - July 2021</b></i>
            <span className="date-heading" style={{textAlign: 'right'}}><b><i>3 months</i></b></span>
            </h5>
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

