// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig'; // Import the configured Axios instance

// const StudentTable = () => {

//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get('/students/findAll')
//       .then(response => setStudents(response.data.data))
//       .catch(error => console.error('There was an error fetching the students!', error));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('/students/studentId')
//       .then(response => {
//         setStudents(students.filter(student => student.studentId !== id));
//       })
//       .catch(error => console.error('There was an error deleting the student!', error));
//   };
  
//   return (
//     <div>
//       <h2>Students</h2>
//       <table>
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
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.studentId}>
//              <td>{student.studentId}</td>
//               <td>{student.studentFirstName}</td>
//               <td>{student.studentLastName}</td>
//               <td>{student.studentEmail}</td>
//               <td>{student.studentPhoneNo}</td>
//               {/* Displaying courseIds here */}
//               <td>{student.courseIds.join(', ')}</td>
//               <td><button>Edit</button></td>
//               <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
//            </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;

// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig'; // Import the configured Axios instance
// import './StudentTable.css';

// const StudentTable = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get('/students/findAll')
//       .then(response => setStudents(response.data.data))
//       .catch(error => console.error('There was an error fetching the students!', error));
//   }, []);

//   const handleDelete = (studentId) => {
//     axios.delete(`/students/${studentId}`)
//       .then(response => {
//         if (response.data.status === '200 OK') { // Assuming your backend returns a status object
//           setStudents(students.filter(student => student.studentId !== studentId));
//         } else {
//           console.error('Delete operation failed:', response.data.message);
//         }
//       })
//       .catch(error => console.error('There was an error deleting the student!', error));
//   };

//   const handleEdit = (studentId) => {
//     // Logic for editing the student details (fetch and populate a form)
//     // This part depends on how you want to implement editing
//     console.log('Edit student with ID:', studentId);
//     // Example: Redirect to a new route or open a modal for editing
//   };

//   return (
//     <div>
//       <h2>Students</h2>
//       <table>
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
//               {/* Displaying courseIds here */}
//               <td>{student.courseIds.join(', ')}</td>
//               <td><button onClick={() => handleEdit(student.studentId)}>Edit</button></td>
//               <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;


import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Assuming this is the correct path
import './StudentTable.css'; // Ensure this path is correct

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students/findAll')
      .then(response => setStudents(response.data.data))
      .catch(error => console.error('There was an error fetching the students!', error));
  }, []);

  const handleDelete = (studentId) => {
    axios.delete(`/students/${studentId}`)
      .then(response => {
        if (response.data.status === '200 OK') {
          setStudents(students.filter(student => student.studentId !== studentId));
        } else {
          console.error('Delete operation failed:', response.data.message);
        }
      })
      .catch(error => console.error('There was an error deleting the student!', error));
  };

  const handleEdit = (studentId) => {
    console.log('Edit student with ID:', studentId);
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
            <th>Edit</th>
            <th>Delete</th>
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
              <td>{student.courseIds.join(', ')}</td>
              <td><button onClick={() => handleEdit(student.studentId)}>Edit</button></td>
              <td><button onClick={() => handleDelete(student.studentId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;

