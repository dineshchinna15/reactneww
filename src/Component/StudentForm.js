
// import React, { useState } from 'react';
// import axios from '../axiosConfig';
// import './StudentForm.css';

// const StudentForm = () => {
//   const [student, setStudent] = useState({
//     studentId: '',
//     studentFirstName: '',
//     studentLastName: '',
//     studentEmail: '',
//     studentPhoneNo: '',
//     courseIds: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'courseIds') {
//       const courseIdsArray = value.split(',').map(id => parseInt(id.trim()));
//       setStudent({ ...student, [name]: courseIdsArray });
//     } else {
//       setStudent({ ...student, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/students/save', student)
//       .then(response => {
//         console.log('Student saved successfully:', response.data);
//         setStudent({
//           studentId: '',
//           studentFirstName: '',
//           studentLastName: '',
//           studentEmail: '',
//           studentPhoneNo: '',
//           courseIds: []
//         });
//       })
//       .catch(error => {
//         console.error('There was an error saving the student:', error);
//         // Handle specific error messages if needed
//       });
//   };

//   return (
//     <form className="student-form" onSubmit={handleSubmit}>
//       <h2>Add Student</h2>
//       <div className="form-group">
//         <label htmlFor="studentId">Student ID</label>
//         <input
//           type="text"
//           id="studentId"
//           name="studentId"
//           value={student.studentId}
//           onChange={handleChange}
//           placeholder="Enter Student ID"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentFirstName">First Name</label>
//         <input
//           type="text"
//           id="studentFirstName"
//           name="studentFirstName"
//           value={student.studentFirstName}
//           onChange={handleChange}
//           placeholder="Enter First Name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentLastName">Last Name</label>
//         <input
//           type="text"
//           id="studentLastName"
//           name="studentLastName"
//           value={student.studentLastName}
//           onChange={handleChange}
//           placeholder="Enter Last Name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentEmail">Email</label>
//         <input
//           type="email"
//           id="studentEmail"
//           name="studentEmail"
//           value={student.studentEmail}
//           onChange={handleChange}
//           placeholder="Enter Email"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentPhoneNo">Phone</label>
//         <input
//           type="tel"
//           id="studentPhoneNo"
//           name="studentPhoneNo"
//           value={student.studentPhoneNo}
//           onChange={handleChange}
//           placeholder="Enter Phone"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseIds">Course IDs (comma separated)</label>
//         <input
//           type="text"
//           id="courseIds"
//           name="courseIds"
//           value={student.courseIds.join(', ')}
//           onChange={handleChange}
//           placeholder="Enter Course IDs"
//         />
//         <small className="form-text text-muted">
//           Separate multiple IDs with commas (e.g., 1, 2, 3)
//         </small>
//       </div>

//       <button type="submit">Add Student</button>
//     </form>
//   );
// };

// export default StudentForm;



// import React, { useState } from 'react';
// import axios from '../axiosConfig';
// import './StudentForm.css';

// const StudentForm = () => {
//   const [student, setStudent] = useState({
//     studentId: '',
//     studentFirstName: '',
//     studentLastName: '',
//     studentEmail: '',
//     studentPhoneNo: '',
//     courseIds: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent({ ...student, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const parsedStudent = {
//       ...student,
//       courseIds: student.courseIds
//         .split(',')
//         .map(id => parseInt(id.trim(), 10))
//         .filter(id => !isNaN(id)) // Ensure only valid numbers are included
//     };

//     axios.post('/students/save', parsedStudent)
//       .then(response => {
//         console.log('Student saved successfully:', response.data);
//         setStudent({
//           studentId: '',
//           studentFirstName: '',
//           studentLastName: '',
//           studentEmail: '',
//           studentPhoneNo: '',
//           courseIds: ''
//         });
//       })
//       .catch(error => {
//         console.error('There was an error saving the student:', error);
//       });
//   };

//   return (
//     <form className="student-form" onSubmit={handleSubmit}>
//       <h2>Add Student</h2>
//       <div className="form-group">
//         <label htmlFor="studentId">Student ID</label>
//         <input
//           type="text"
//           id="studentId"
//           name="studentId"
//           value={student.studentId}
//           onChange={handleChange}
//           placeholder="Enter Student ID"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentFirstName">First Name</label>
//         <input
//           type="text"
//           id="studentFirstName"
//           name="studentFirstName"
//           value={student.studentFirstName}
//           onChange={handleChange}
//           placeholder="Enter First Name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentLastName">Last Name</label>
//         <input
//           type="text"
//           id="studentLastName"
//           name="studentLastName"
//           value={student.studentLastName}
//           onChange={handleChange}
//           placeholder="Enter Last Name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentEmail">Email</label>
//         <input
//           type="email"
//           id="studentEmail"
//           name="studentEmail"
//           value={student.studentEmail}
//           onChange={handleChange}
//           placeholder="Enter Email"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="studentPhoneNo">Phone</label>
//         <input
//           type="tel"
//           id="studentPhoneNo"
//           name="studentPhoneNo"
//           value={student.studentPhoneNo}
//           onChange={handleChange}
//           placeholder="Enter Phone"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseIds">Course IDs (comma separated)</label>
//         <input
//           type="text"
//           id="courseIds"
//           name="courseIds"
//           value={student.courseIds}
//           onChange={handleChange}
//           placeholder="Enter Course IDs"
//         />
//         <small className="form-text text-muted">
//           Separate multiple IDs with commas (e.g., 1, 2, 3)
//         </small>
//       </div>

//       <button type="submit">Add Student</button>
//     </form>
//   );
// };

// export default StudentForm;

import React, { useState } from 'react';
import axios from '../axiosConfig';
import './StudentForm.css';

const StudentForm = () => {
  const [student, setStudent] = useState({
    studentId: '',
    studentFirstName: '',
    studentLastName: '',
    studentEmail: '',
    studentPhoneNo: '',
    courseIds: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedStudent = {
      ...student,
      courseIds: student.courseIds
        .split(',')
        .map(id => parseInt(id.trim(), 10))
        .filter(id => !isNaN(id)) // Ensure only valid numbers are included
    };

    axios.post('/students/save', parsedStudent)
      .then(response => {
        console.log('Student saved successfully:', response.data);
        setStudent({
          studentId: '',
          studentFirstName: '',
          studentLastName: '',
          studentEmail: '',
          studentPhoneNo: '',
          courseIds: ''
        });
      })
      .catch(error => {
        console.error('There was an error saving the student:', error);
      });
  };

  const handleCancel = () => {
    setStudent({
      studentId: '',
      studentFirstName: '',
      studentLastName: '',
      studentEmail: '',
      studentPhoneNo: '',
      courseIds: ''
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <div className="form-group">
        <label htmlFor="studentId">Student ID</label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          value={student.studentId}
          onChange={handleChange}
          placeholder="Enter Student ID"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentFirstName">First Name</label>
        <input
          type="text"
          id="studentFirstName"
          name="studentFirstName"
          value={student.studentFirstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentLastName">Last Name</label>
        <input
          type="text"
          id="studentLastName"
          name="studentLastName"
          value={student.studentLastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentEmail">Email</label>
        <input
          type="email"
          id="studentEmail"
          name="studentEmail"
          value={student.studentEmail}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentPhoneNo">Phone</label>
        <input
          type="tel"
          id="studentPhoneNo"
          name="studentPhoneNo"
          value={student.studentPhoneNo}
          onChange={handleChange}
          placeholder="Enter Phone"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseIds">Course IDs (comma separated)</label>
        <input
          type="text"
          id="courseIds"
          name="courseIds"
          value={student.courseIds}
          onChange={handleChange}
          placeholder="Enter Course IDs"
        />
        <small className="form-text text-muted">
          Separate multiple IDs with commas (e.g., 1, 2, 3)
        </small>
      </div>

      <button type="submit">Add Student</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default StudentForm;
