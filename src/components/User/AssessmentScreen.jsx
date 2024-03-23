// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AssessmentQuiz from './AssessmentQuiz'; // Import the AssessmentQuiz component
// import { accessToken } from '../../Constant';
//  // Import the access token

// const AssessmentScreen = () => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Define the course name you want to fetch questions for
//     const courseName = 'DOTNET'; // Example course name

//     // Fetch assessment questions by course name
//     axios.get(`https://localhost:7244/api/AssessmentQuestion/DOTNET`, { headers: { 'Authorization': `Bearer ${accessToken}` } })
//       .then(response => {
//         setQuestions(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching assessment questions:', error);
//         setError(error.message || 'Failed to fetch assessment questions');
//         setLoading(false);
//       });
      
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Assessment Quiz</h1>
//       {questions.map(question => (
//         <AssessmentQuiz key={question.questionId} question={question} />
//       ))}
//     </div>
//   );
// };

// export default AssessmentScreen;
