import React from 'react';

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'path/to/your_resume.pdf'; // Replace with your resume file path
    link.download = 'your_resume.pdf'; // Change the downloaded file name if needed
    link.click();
  };

  const handleView = () => {
    window.open('path/to/your_resume.pdf', '_blank'); // Replace with your resume file path
  };

  return (
    <div className="resume-page" id="resume">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>You can choose to download or view my resume:</p>
        <div className="buttons">
          <button className="download-button" onClick={handleDownload}>Download Resume</button>
          <button className="view-button" onClick={handleView}>View Resume</button>
        </div>
      </div>
    </div>
  );
};
