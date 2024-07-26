
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import CourseForm from './Component/CourseForm';
// // import CourseTable from './Component/CourseTable';
// // import StudentForm from './Component/StudentForm';
// // import StudentTable from './Component/StudentTable';
// // import './App.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <div className="header">
// //           <Link to="/" className="header-button">Home</Link>
         
// //         </div>

// //         <div className="content">
// //           <Routes>
// //             <Route path="/" element={
// //               <div className="home-page">
// //                 <div className="section">
// //                   <h2>Student Registration</h2>
// //                   <Link to="/students" className="header-button">Manage Students</Link>
// //                 </div>
// //                 <div className="section">
// //                   <h2>Course Registration</h2>
// //                   <Link to="/courses" className="header-button">Manage Courses</Link>
// //                 </div>
// //               </div>
// //             } />
// //             <Route path="/students" element={
// //               <>
// //                 <StudentForm />
// //                 <StudentTable />
// //               </>
// //             } />
// //             <Route path="/courses" element={
// //               <>
// //                 <CourseForm />
// //                 <CourseTable />
// //               </>
// //             } />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import CourseForm from './Component/CourseForm';
// // import CourseTable from './Component/CourseTable';
// // import StudentForm from './Component/StudentForm';
// // import StudentTable from './Component/StudentTable';
// // import './App.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <div className="header">
// //           <Link to="/" className="header-button">Home</Link>
// //         </div>

// //         <div className="content">
// //           <Routes>
// //             <Route path="/" element={
// //               <div className="home-page">
// //                 <div className="section">
// //                   <h2>Student Registration</h2>
// //                   <Link to="/students" className="header-button">Manage Students</Link>
// //                 </div>
// //                 <div className="section">
// //                   <h2>Course Registration</h2>
// //                   <Link to="/courses" className="header-button">Manage Courses</Link>
// //                 </div>
// //               </div>
// //             } />
// //             <Route path="/students" element={
// //               <>
// //                 <StudentForm />
// //                 <StudentTable />
// //               </>
// //             } />
// //             <Route path="/courses" element={
// //               <>
// //                 <CourseForm />
// //                 <CourseTable />
// //               </>
// //             } />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage'; // Import the HomePage component
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable />
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage'; // Import the HomePage component
// import MapStudentToCourse from './Component/MapStudentToCourse';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Student Management System</h1>
//         </header>
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable />
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage'; // Import the HomePage component
// // import MappingForm from './Component/MappingForm';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Student Management System</h1>
//         </header>
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable />
//                 {/* Add MapStudentToCourse component here if needed */}
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage';
// import MappingForm from './Component/MappingForm';

// import './App.css';

// function App() {
//   const [showMappingForm, setShowMappingForm] = useState(false);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [courses, setCourses] = useState([]);

//   const toggleMappingForm = (studentId, availableCourses) => {
//     setSelectedStudentId(studentId);
//     setCourses(availableCourses);
//     setShowMappingForm(!showMappingForm);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Student Management System</h1>
//         </header>
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable toggleMappingForm={toggleMappingForm} />
//                 {showMappingForm && (
//                   <MappingForm
//                     studentId={selectedStudentId}
//                     courses={courses}
//                     onClose={() => setShowMappingForm(false)}
//                   />
//                 )}
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage';
// import MappingForm from './Component/MappingForm';

// import './App.css';

// function App() {
//   const [showMappingForm, setShowMappingForm] = useState(false);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [courses, setCourses] = useState([]);

//   const toggleMappingForm = (studentId, availableCourses) => {
//     setSelectedStudentId(studentId);
//     setCourses(availableCourses);
//     setShowMappingForm(!showMappingForm);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Student Management System</h1>
//         </header>
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//           {/* Adding a mapping link if needed as a separate route */}
//           <Link to="/mapping" className="header-button">Mapping</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable toggleMappingForm={toggleMappingForm} />
//                 {showMappingForm && (
//                   <MappingForm
//                     studentId={selectedStudentId}
//                     courses={courses}
//                     onClose={() => setShowMappingForm(false)}
//                   />
//                 )}
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//             {/* If you want to create a dedicated mapping page */}
//             <Route path="/mapping" element={
//               <MappingForm
//                 studentId={selectedStudentId}
//                 courses={courses}
//                 onClose={() => setShowMappingForm(false)}
//               />
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import CourseForm from './Component/CourseForm';
// import CourseTable from './Component/CourseTable';
// import StudentForm from './Component/StudentForm';
// import StudentTable from './Component/StudentTable';
// import HomePage from './Component/HomePage';

// import './App.css';

// function App() {
//   const [showMappingForm, setShowMappingForm] = useState(false);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [courses, setCourses] = useState([]);

//   const toggleMappingForm = (studentId, availableCourses) => {
//     setSelectedStudentId(studentId);
//     setCourses(availableCourses);
//     setShowMappingForm(true);
//   };

//   const handleCloseMappingForm = () => {
//     setShowMappingForm(false);
//     setSelectedStudentId(null);
//     setCourses([]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Student Management System</h1>
//         </header>
//         <div className="header">
//           <Link to="/" className="header-button">Home</Link>
//           <Link to="/students" className="header-button">Manage Students</Link>
//           <Link to="/courses" className="header-button">Manage Courses</Link>
//           <Link to="/mapping" className="header-button">Mapping</Link>
//         </div>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/students" element={
//               <>
//                 <StudentForm />
//                 <StudentTable toggleMappingForm={toggleMappingForm} />
//                 {showMappingForm && (
//                   <MappingForm
//                     studentId={selectedStudentId}
//                     courses={courses}
//                     onClose={handleCloseMappingForm}
//                   />
//                 )}
//               </>
//             } />
//             <Route path="/courses" element={
//               <>
//                 <CourseForm />
//                 <CourseTable />
//               </>
//             } />
//             <Route path="/mapping" element={
//               <MappingForm
//                 studentId={selectedStudentId}
//                 courses={courses}
//                 onClose={handleCloseMappingForm}
//               />
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseForm from './Component/CourseForm';
import CourseTable from './Component/CourseTable';
import StudentForm from './Component/StudentForm';
import StudentTable from './Component/StudentTable';
import HomePage from './Component/HomePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Student Management System</h1>
        </header>
        <div className="header">
          <Link to="/" className="header-button">Home</Link>
          <Link to="/students" className="header-button">Manage Students</Link>
          <Link to="/courses" className="header-button">Manage Courses</Link>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={
              <>
                <StudentForm />
                <StudentTable />
              </>
            } />
            <Route path="/courses" element={
              <>
                <CourseForm />
                <CourseTable />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



