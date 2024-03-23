// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import { accessToken } from '../../Constant'; // Import the access token

// const AssessmentQuiz = ({ question }) => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [result, setResult] = useState('');

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//     // Check if selectedOption matches the correctAns
//     if (selectedOption === question.correctAns) {
//       setResult('right');
//     } else {
//       setResult('wrong');
//     }
//   };

//   return (
//     <div className="container">
//       <Card>
//         <Card.Body>
//           <Card.Title>Question</Card.Title>
//           <Card.Text>{question.questionText}</Card.Text>
//           <Form>
//             <Form.Group>
//               <Form.Check
//                 type="radio"
//                 id="optionA"
//                 name="options"
//                 label={question.optA}
//                 checked={selectedOption === 'optA'}
//                 onChange={() => handleOptionSelect('optA')}
//               />
//               <Form.Check
//                 type="radio"
//                 id="optionB"
//                 name="options"
//                 label={question.optB}
//                 checked={selectedOption === 'optB'}
//                 onChange={() => handleOptionSelect('optB')}
//               />
//               <Form.Check
//                 type="radio"
//                 id="optionC"
//                 name="options"
//                 label={question.optC}
//                 checked={selectedOption === 'optC'}
//                 onChange={() => handleOptionSelect('optC')}
//               />
//               <Form.Check
//                 type="radio"
//                 id="optionD"
//                 name="options"
//                 label={question.optD}
//                 checked={selectedOption === 'optD'}
//                 onChange={() => handleOptionSelect('optD')}
//               />
//             </Form.Group>
//           </Form>
//           <Button variant="primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//           {result && <p>Your answer is {result}</p>}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default AssessmentQuiz;
