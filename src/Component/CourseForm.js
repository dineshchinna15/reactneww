
// import React, { useState } from 'react';
// import axios from '../axiosConfig';
// import './CourseForm.css';

// const CourseForm = () => {
//   const [course, setCourse] = useState({
//     courseId: '', // Add courseId to state
//     courseFee: '',
//     courseName: '',
//     courseFaculty: '',
//     courseDuration: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/courses/saveCourses', course)
//       .then(response => {
//         console.log('Course saved successfully:', response.data);
//         setCourse({ courseId: '', courseFee: '', courseName: '', courseFaculty: '', courseDuration: '' });
//       })
//       .catch(error => {
//         console.error('Error saving course:', error);
//         if (error.response) {
//           console.error('Server Error:', error.response.data);
//         } else {
//           console.error('Network Error:', error.message);
//         }
//       });
//   };

//   return (
//     <form className="course-form" onSubmit={handleSubmit}>
//       <h2>Add Course</h2>

//       <div className="form-group">
//         <label htmlFor="courseName">Course Name:</label>
//         <input
//           type="text"
//           id="courseId"
//           name="courseId"
//           value={course.courseId}
//           onChange={handleChange}
//           placeholder="Enter Course id"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseName">Course Name:</label>
//         <input
//           type="text"
//           id="courseName"
//           name="courseName"
//           value={course.courseName}
//           onChange={handleChange}
//           placeholder="Enter Course Name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseFaculty">Course Faculty:</label>
//         <input
//           type="text"
//           id="courseFaculty"
//           name="courseFaculty"
//           value={course.courseFaculty}
//           onChange={handleChange}
//           placeholder="Enter Faculty"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseDuration">Course Duration:</label>
//         <input
//           type="text"
//           id="courseDuration"
//           name="courseDuration"
//           value={course.courseDuration}
//           onChange={handleChange}
//           placeholder="Enter Duration"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="courseFee">Course Fee:</label>
//         <input
//           type="text"
//           id="courseFee"
//           name="courseFee"
//           value={course.courseFee}
//           onChange={handleChange}
//           placeholder="Enter Course Fee"
//           required
//         />
//       </div>

//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default CourseForm;


import React, { useState } from 'react';
import axios from '../axiosConfig';
import './CourseForm.css';

const CourseForm = () => {
  const [course, setCourse] = useState({
    courseId: '',
    courseFee: '',
    courseName: '',
    courseFaculty: '',
    courseDuration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/courses/saveCourses', course)
      .then(response => {
        console.log('Course saved successfully:', response.data);
        setCourse({
          courseId: '',
          courseFee: '',
          courseName: '',
          courseFaculty: '',
          courseDuration: ''
        });
      })
      .catch(error => {
        console.error('Error saving course:', error);
        if (error.response) {
          console.error('Server Error:', error.response.data);
        } else {
          console.error('Network Error:', error.message);
        }
      });
  };

  const handleCancel = () => {
    setCourse({
      courseId: '',
      courseFee: '',
      courseName: '',
      courseFaculty: '',
      courseDuration: ''
    });
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <h2>Add Course</h2>

      <div className="form-group">
        <label htmlFor="courseId">Course ID:</label>
        <input
          type="text"
          id="courseId"
          name="courseId"
          value={course.courseId}
          onChange={handleChange}
          placeholder="Enter Course ID"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          placeholder="Enter Course Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseFaculty">Course Faculty:</label>
        <input
          type="text"
          id="courseFaculty"
          name="courseFaculty"
          value={course.courseFaculty}
          onChange={handleChange}
          placeholder="Enter Faculty"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseDuration">Course Duration:</label>
        <input
          type="text"
          id="courseDuration"
          name="courseDuration"
          value={course.courseDuration}
          onChange={handleChange}
          placeholder="Enter Duration"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseFee">Course Fee:</label>
        <input
          type="text"
          id="courseFee"
          name="courseFee"
          value={course.courseFee}
          onChange={handleChange}
          placeholder="Enter Course Fee"
          required
        />
      </div>

      <button type="submit">Add Course</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CourseForm;
