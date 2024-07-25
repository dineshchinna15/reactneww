import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Import the configured Axios instance
import './CourseTable.css'; // Import the CSS file

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formValues, setFormValues] = useState({ duration: '', fee: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios.get('/courses/getAllCourses')
      .then(response => setCourses(response.data.data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`/courses/${id}`)
      .then(response => {
        console.log('Course deleted successfully:', response.data);
        setCourses(courses.filter(course => course.courseId !== id));
      })
      .catch(error => console.error('Error deleting course:', error));
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormValues({ duration: course.courseDuration, fee: course.courseFee });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { duration, fee } = formValues;
    axios.patch(`/courses/${editingCourse.courseId}/${duration}/${fee}`)
      .then(response => {
        const updatedCourse = response.data.data;
        setCourses(courses.map(course => 
          course.courseId === updatedCourse.courseId ? updatedCourse : course
        ));
        setEditingCourse(null);
        setFormValues({ duration: '', fee: '' });
      })
      .catch(error => console.error('Error updating course:', error));
  };

  return (
    <div className="course-table-container">
      <h2>Courses</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Id</th>
            <th>Course Fee</th>
            <th>Course Name</th>
            <th>Course Faculty</th>
            <th>Course Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.courseId}>
              <td>{course.courseId}</td>
              <td>{course.courseFee}</td>
              <td>{course.courseName}</td>
              <td>{course.courseFaculty}</td>
              <td>{course.courseDuration}</td>
              <td><button onClick={() => handleEdit(course)}>Edit</button></td>
              <td><button onClick={() => handleDelete(course.courseId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {editingCourse && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <h2>Edit Course</h2>
          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              name="duration"
              value={formValues.duration}
              onChange={handleChange}
              placeholder="Duration"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fee">Fee:</label>
            <input
              type="number"
              name="fee"
              value={formValues.fee}
              onChange={handleChange}
              placeholder="Fee"
              required
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default CourseTable;
