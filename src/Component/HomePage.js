// import React, { useEffect, useState } from 'react';
// import axios from '../axiosConfig'; // Import the configured Axios instance

// const HomePage = () => {
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [totalCourses, setTotalCourses] = useState(0);
//   const [remainingCourses, setRemainingCourses] = useState(0);

//   useEffect(() => {
//     // Fetch total students
//     axios.get('/students/findAll')
//       .then(response => setTotalStudents(response.data.data.length))
//       .catch(error => console.error('Error fetching students:', error));

//     // Fetch total courses
//     axios.get('/courses/getAllCourses')
//       .then(response => {
//         const courseCount = response.data.data.length;
//         setTotalCourses(courseCount);

//         // Optionally calculate remaining courses based on students if needed
//         // For simplicity, we assume remaining courses = total courses here
//         setRemainingCourses(courseCount);
//       })
//       .catch(error => console.error('Error fetching courses:', error));
//   }, []);

//   return (
//     <div className="home-page">
     
//       <div className="summary">
//         <p>Total Students: {totalStudents}</p>
//         <p>Total Courses: {totalCourses}</p>
//         <p>Total Courses: {remainingCourses}</p>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Import the configured Axios instance

const HomePage = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [assignedCoursesCount, setAssignedCoursesCount] = useState(0);

  useEffect(() => {
    // Fetch total students
    axios.get('/students/findAll')
      .then(response => setTotalStudents(response.data.data.length))
      .catch(error => console.error('Error fetching students:', error));

    // Fetch total courses and assigned courses
    axios.get('/courses/getAllCourses')
      .then(courseResponse => {
        const courseCount = courseResponse.data.data.length;
        setTotalCourses(courseCount);

        // Fetch students to find assigned courses
        return axios.get('/students/findAll');
      })
      .then(studentResponse => {
        const students = studentResponse.data.data;
        const assignedCourseIds = new Set();

        // Collect course IDs that are assigned to students
        students.forEach(student => {
          student.courseIds.forEach(courseId => assignedCourseIds.add(courseId));
        });

        setAssignedCoursesCount(assignedCourseIds.size); // Set count of assigned courses
      })
      .catch(error => console.error('Error fetching courses or students:', error));
  }, []);

  return (
    <div className="home-page">
      <div className="summary">
        <p>Total Registered Students: {totalStudents}</p>
        <p>Total Available Courses: {totalCourses}</p>
        <p>Total Assigned Courses: {assignedCoursesCount}</p>
      </div>
    </div>
  );
};

export default HomePage;
