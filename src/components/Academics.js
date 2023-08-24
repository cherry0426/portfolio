import React, { useState } from "react";
import 'react-multi-carousel/lib/styles.css';

export const Academics = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  return (
    <section className="project" id="academics">
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Academics
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Experience
        </button>
      </div>
      <div className="panels">
      <div className={`panel ${checkActive(1, "active")}`}>
        <h3 className="section-title">Education</h3>
        <ul className="section-title-ul">
          <li>
            The University of Texas at Dallas, Dallas, United States (August 2021 - May 2023)<br/>
            Master of Science in Computer Science<br/>
            Courses: Analysis of Algorithms and Data Structures, Design and Analysis of Algorithms, Database design, Machine 
            Learning, Statistical methods for Data Science, Web Programming Languages, Big Data and Analysis, Network Security<br/>
            GPA: 3.85
          </li><br/>
          <li>
            Jawaharlal Nehru Technological University, India (August 2017 - June 2021)<br/>
            Bachelor of Engineering in Computer Science and Engineering<br/>
            GPA: 4.0
          </li>
        </ul>
        <h3 className="section-title">Extracurricular Activities & Achievements</h3>
        <ul className="section-title-ul">
          <li>Volunteered and Organized various IEEE technical workshops.</li>
          <li>Developed a Taste Analyser based on facial expressions using Deep Learning in Smart India Hackathon in 2020 
            organized by the Government of India.</li>
          <li>Scored 8.5 in IELTS Speaking.</li>
        </ul>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
        <h3 className="section-title">Software Engineer Intern, Copart, Dallas, Texas (June 2022 - January 2023)</h3>
        <ul className="section-title-ul">
          <li>Worked on automating form generation and document management, saving $100K per year for the company.</li>
          <li>Developed REST API microservices for Front-end applications and business logic using Ruby on Rails for 
            Back-End and JavaScript, ReactJS for the Front-End.</li>
          <li>Utilized MySQL database and Redis cache to support the backend.</li>
          <li>Peer code review, Jenkins build creation, debugging Solr issues, fixing bugs in QA and production to resolve 10% 
            of open defects and implement new functionalities.</li>
        </ul>

        <h3 className="section-title">Student Assistant, Department of Computer Science, University of Texas at Dallas 
        (September 2021 - May 2022)</h3>
        <ul className="section-title-ul">
          <li>Graded assignments for CS2337 Programming in Java and CS1337 Programming in C++ courses.</li>
          <li>Assisted the professor in teaching classes and provided guidance to students.</li>
          <li>Collaborated with faculty members on research projects, conducting literature reviews and data analysis.</li>
        </ul>

        <h3 className="section-title">Software Engineer Intern, Ample IT, Hyderabad, India (May 2021 - July 2021)</h3>
        <ul className="section-title-ul">
          <li>Developed software for a Machine Learning model to verify, digitize, structure, and correlate scanned paper 
            belonging to shipments for the trucking industry, reducing manual work by 90%.</li>
          <li>Designed the Chargird OCR approach to better understand the structure of 2D documents using TensorFlow and 
            Pytesseract for document analysis.</li>
        </ul>
          </div>
      </div>
    </section>
  );
};

