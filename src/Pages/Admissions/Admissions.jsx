import React from 'react';
import './Admissions.css';

const Admission = () => {
  return (
    <div className="admission-container">
      <h2>Admission Process</h2>
      <p>
        Admissions are open for Nursery to Class 8. Please contact us for more details on how to apply or schedule a visit to the school.
      </p>
      <ul>
        <li>Step 1: Fill out the application form.</li>
        <li>Step 2: Submit necessary documents.</li>
        <li>Step 3: Attend an interview.</li>
        <li>Step 4: Get admission confirmation.</li>
      </ul>
    </div>
  );
};

export default Admission;
