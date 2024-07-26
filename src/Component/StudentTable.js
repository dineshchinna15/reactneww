


// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig'; // Ensure this is the correct path
// import './StudentTable.css'; // Ensure this path is correct

// const StudentTable = () => {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [selectedCourseIds, setSelectedCourseIds] = useState([]);

//   useEffect(() => {
//     // Fetch students
//     axios.get('/students/findAll')
//       .then(response => setStudents(response.data.data))
//       .catch(error => console.error('Error fetching students:', error));

//     // Fetch courses
//     axios.get('/courses/getAllCourses')
//       .then(response => setCourses(response.data.data))
//       .catch(error => console.error('Error fetching courses:', error));
//   }, []);

//   const handleDelete = (studentId) => {
//     axios.delete(`/students/${studentId}`)
//       .then(response => {
//         if (response.status === 200) {
//           setStudents(students.filter(student => student.studentId !== studentId));
//         } else {
//           console.error('Delete operation failed:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error deleting student:', error));
//   };

//   const handleEdit = (studentId) => {
//     console.log('Edit student with ID:', studentId);
//   };

//   const handleMap = (studentId) => {
//     setSelectedStudentId(studentId);
//     setSelectedCourseIds([]);
//   };

//   const handleCourseChange = (e) => {
//     const courseId = parseInt(e.target.value, 10); // Ensure it's an integer
//     const isChecked = e.target.checked;

//     setSelectedCourseIds(prevCourseIds => {
//       if (isChecked) {
//         return [...prevCourseIds, courseId];
//       } else {
//         return prevCourseIds.filter(id => id !== courseId);
//       }
//     });
//   };

//   const handleSubmitMapping = (e) => {
//     e.preventDefault();
//     if (selectedStudentId) {
//       axios.patch(`/students/mappings/${selectedStudentId}`, selectedCourseIds)
//         .then(response => {
//           if (response.status === 200) {
//             console.log('Courses mapped to student successfully:', response.data);
//             setSelectedStudentId(null);
//             setSelectedCourseIds([]);
//             // Refresh students list or update the UI as needed
//             axios.get('/students/findAll')
//               .then(response => setStudents(response.data.data))
//               .catch(error => console.error('Error fetching updated students list:', error));
//           } else {
//             console.error('Mapping operation failed:', response.statusText);
//           }
//         })
//         .catch(error => console.error('Error mapping courses to student:', error));
//     }
//   };

//   const getCourseNames = (courseIds) => {
//     return courses
//       .filter(course => courseIds.includes(course.courseId))
//       .map(course => course.courseName)
//       .join(', ');
//   };

//   return (
//     <div className="student-table-container">
//       <h2>Students</h2>
//       <table className="student-table">
//         <thead>
//           <tr>
//             <th>StudentId</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Courses</th>
//             <th>Edit</th>
//             <th>Delete</th>
//             <th>Map</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.studentId}>
//               <td>{student.studentId}</td>
//               <td>{student.studentFirstName}</td>
//               <td>{student.studentLastName}</td>
//               <td>{student.studentEmail}</td>
//               <td>{student.studentPhoneNo}</td>
//               <td>{getCourseNames(student.courseIds)}</td>
//               <td><button onClick={() => handleEdit(student.studentId)}>Edit</button></td>
//               <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
//               <td><button onClick={() => handleMap(student.studentId)}>Map</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedStudentId && (
//         <form className="mapping-form" onSubmit={handleSubmitMapping}>
//           <h3>Map Courses for Student ID: {selectedStudentId}</h3>
//           <div className="form-group">
//             {courses.map(course => (
//               <div key={course.courseId}>
//                 <input
//                   type="checkbox"
//                   id={`course-${course.courseId}`}
//                   value={course.courseId}
//                   checked={selectedCourseIds.includes(course.courseId)}
//                   onChange={handleCourseChange}
//                 />
//                 <label htmlFor={`course-${course.courseId}`}>{course.courseName}</label>
//               </div>
//             ))}
//           </div>
//           <button type="submit">Submit Mapping</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default StudentTable;


// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig'; // Ensure this is the correct path
// import './StudentTable.css'; // Ensure this path is correct

// const StudentTable = () => {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [selectedCourseIds, setSelectedCourseIds] = useState([]);
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [totalCourses, setTotalCourses] = useState(0);

//   useEffect(() => {
//     // Fetch students
//     axios.get('/students/findAll')
//       .then(response => {
//         setStudents(response.data.data);
//         setTotalStudents(response.data.data.length); // Set total students count
//       })
//       .catch(error => console.error('Error fetching students:', error));

//     // Fetch courses
//     axios.get('/courses/getAllCourses')
//       .then(response => {
//         setCourses(response.data.data);
//         setTotalCourses(response.data.data.length); // Set total courses count
//       })
//       .catch(error => console.error('Error fetching courses:', error));
//   }, []);

//   const handleDelete = (studentId) => {
//     axios.delete(`/students/${studentId}`)
//       .then(response => {
//         if (response.status === 200) {
//           setStudents(students.filter(student => student.studentId !== studentId));
//         } else {
//           console.error('Delete operation failed:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error deleting student:', error));
//   };

//   const handleEdit = (studentId) => {
//     console.log('Edit student with ID:', studentId);
//   };

//   const handleMap = (studentId) => {
//     setSelectedStudentId(studentId);
//     setSelectedCourseIds([]);
//   };

//   const handleCourseChange = (e) => {
//     const courseId = parseInt(e.target.value, 10); // Ensure it's an integer
//     const isChecked = e.target.checked;

//     setSelectedCourseIds(prevCourseIds => {
//       if (isChecked) {
//         return [...prevCourseIds, courseId];
//       } else {
//         return prevCourseIds.filter(id => id !== courseId);
//       }
//     });
//   };

//   const handleSubmitMapping = (e) => {
//     e.preventDefault();
//     if (selectedStudentId) {
//       axios.patch(`/students/mappings/${selectedStudentId}`, selectedCourseIds)
//         .then(response => {
//           if (response.status === 200) {
//             console.log('Courses mapped to student successfully:', response.data);
//             setSelectedStudentId(null);
//             setSelectedCourseIds([]);
//             // Refresh students list or update the UI as needed
//             axios.get('/students/findAll')
//               .then(response => setStudents(response.data.data))
//               .catch(error => console.error('Error fetching updated students list:', error));
//           } else {
//             console.error('Mapping operation failed:', response.statusText);
//           }
//         })
//         .catch(error => console.error('Error mapping courses to student:', error));
//     }
//   };

//   const getCourseNames = (courseIds) => {
//     return courses
//       .filter(course => courseIds.includes(course.courseId))
//       .map(course => course.courseName)
//       .join(', ');
//   };

//   const getRemainingCoursesCount = (courseIds) => {
//     return totalCourses - courseIds.length;
//   };

//   return (
//     <div className="student-table-container">
//       <h2>Students</h2>
//       <div className="summary">
//         <p>Total Students: {totalStudents}</p>
//         <p>Total Courses: {totalCourses}</p>
//       </div>
//       <table className="student-table">
//         <thead>
//           <tr>
//             <th>StudentId</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Courses</th>
//             <th>Remaining Courses</th>
//             <th>Edit</th>
//             <th>Delete</th>
//             <th>Map</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.studentId}>
//               <td>{student.studentId}</td>
//               <td>{student.studentFirstName}</td>
//               <td>{student.studentLastName}</td>
//               <td>{student.studentEmail}</td>
//               <td>{student.studentPhoneNo}</td>
//               <td>{getCourseNames(student.courseIds)}</td>
//               <td>{getRemainingCoursesCount(student.courseIds)}</td>
//               <td><button onClick={() => handleEdit(student.studentId)}>Edit</button></td>
//               <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
//               <td><button onClick={() => handleMap(student.studentId)}>Map</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedStudentId && (
//         <form className="mapping-form" onSubmit={handleSubmitMapping}>
//           <h3>Map Courses for Student ID: {selectedStudentId}</h3>
//           <div className="form-group">
//             {courses.map(course => (
//               <div key={course.courseId}>
//                 <input
//                   type="checkbox"
//                   id={`course-${course.courseId}`}
//                   value={course.courseId}
//                   checked={selectedCourseIds.includes(course.courseId)}
//                   onChange={handleCourseChange}
//                 />
//                 <label htmlFor={`course-${course.courseId}`}>{course.courseName}</label>
//               </div>
//             ))}
//           </div>
//           <button type="submit">Submit Mapping</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default StudentTable;

import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Ensure this is the correct path
import './StudentTable.css'; // Ensure this path is correct

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);

  useEffect(() => {
    // Fetch students
    axios.get('/students/findAll')
      .then(response => {
        setStudents(response.data.data);
      })
      .catch(error => console.error('Error fetching students:', error));

    // Fetch courses
    axios.get('/courses/getAllCourses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleDelete = (studentId) => {
    axios.delete(`/students/${studentId}`)
      .then(response => {
        if (response.status === 200) {
          setStudents(students.filter(student => student.studentId !== studentId));
        } else {
          console.error('Delete operation failed:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  const handleEdit = (studentId) => {
    console.log('Edit student with ID:', studentId);
  };

  const handleMap = (studentId) => {
    setSelectedStudentId(studentId);
    setSelectedCourseIds([]);
  };

  const handleCourseChange = (e) => {
    const courseId = parseInt(e.target.value, 10); // Ensure it's an integer
    const isChecked = e.target.checked;

    setSelectedCourseIds(prevCourseIds => {
      if (isChecked) {
        return [...prevCourseIds, courseId];
      } else {
        return prevCourseIds.filter(id => id !== courseId);
      }
    });
  };

  const handleSubmitMapping = (e) => {
    e.preventDefault();
    if (selectedStudentId) {
      axios.patch(`/students/mappings/${selectedStudentId}`, selectedCourseIds)
        .then(response => {
          if (response.status === 200) {
            console.log('Courses mapped to student successfully:', response.data);
            setSelectedStudentId(null);
            setSelectedCourseIds([]);
            // Refresh students list or update the UI as needed
            axios.get('/students/findAll')
              .then(response => setStudents(response.data.data))
              .catch(error => console.error('Error fetching updated students list:', error));
          } else {
            console.error('Mapping operation failed:', response.statusText);
          }
        })
        .catch(error => console.error('Error mapping courses to student:', error));
    }
  };

  const getCourseNames = (courseIds) => {
    return courses
      .filter(course => courseIds.includes(course.courseId))
      .map(course => course.courseName)
      .join(', ');
  };

  const getRemainingCoursesCount = (courseIds) => {
    return courses.length - courseIds.length;
  };

  return (
    <div className="student-table-container">
      <h2>Students</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Courses</th>
            <th>Remaining Courses</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.studentFirstName}</td>
              <td>{student.studentLastName}</td>
              <td>{student.studentEmail}</td>
              <td>{student.studentPhoneNo}</td>
              <td>{getCourseNames(student.courseIds)}</td>
              <td>{getRemainingCoursesCount(student.courseIds)}</td>
              <td><button onClick={() => handleEdit(student.studentId)}>Edit</button></td>
              <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
              <td><button onClick={() => handleMap(student.studentId)}>Map</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudentId && (
        <form className="mapping-form" onSubmit={handleSubmitMapping}>
          <h3>Map Courses for Student ID: {selectedStudentId}</h3>
          <div className="form-group">
            {courses.map(course => (
              <div key={course.courseId}>
                <input
                  type="checkbox"
                  id={`course-${course.courseId}`}
                  value={course.courseId}
                  checked={selectedCourseIds.includes(course.courseId)}
                  onChange={handleCourseChange}
                />
                <label htmlFor={`course-${course.courseId}`}>{course.courseName}</label>
              </div>
            ))}
          </div>
          <button type="submit">Submit Mapping</button>
        </form>
      )}
    </div>
  );
};

export default StudentTable;
