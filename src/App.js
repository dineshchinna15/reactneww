import './App.css';
import React, { useState } from 'react';
import CourseForm from './Component/CourseForm';
import CourseTable from './Component/CourseTable';
import StudentForm from './Component/StudentForm';
import StudentTable from './Component/StudentTable';

function App() {
  const [activeSection, setActiveSection] = useState('student'); // 'student' or 'course'

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <div className="header">
        <button
          className={activeSection === 'student' ? 'active' : ''}
          onClick={() => toggleSection('student')}
        >
          Student Registration
        </button>
        <button
          className={activeSection === 'course' ? 'active' : ''}
          onClick={() => toggleSection('course')}
        >
          Course Registration
        </button>
      </div>

      <div className="content">
        {activeSection === 'student' ? (
          <>
            <StudentForm />
            <StudentTable />
          </>
        ) : (
          <>
            <CourseForm />
            <CourseTable />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
