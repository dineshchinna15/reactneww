// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:8080/api/students', // Replace with your backend server's base URL
// });

// export default instance;




import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',  // Replace with your actual API base URL
  timeout: 10000,  // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // You can add more headers if needed
  },
});

export default instance;


