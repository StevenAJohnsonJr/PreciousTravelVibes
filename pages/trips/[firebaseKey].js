// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// // Import the modified createTrips function that uses fetch
// import { createTrip, getTripsCruise } from '../../api/tripsData';

// export default function Viewtrip() {
//   const [singleTripDetails, setTripDetails] = useState({});
//   const [trips, setTrips] = useState([]);
//   const router = useRouter();
//   const { firebaseKey } = router.query;

//   // TODO: make call to API layer to get the data
//   useEffect(() => {
//     viewTripDetails(firebaseKey).then(setTripDetails);
//   }, [firebaseKey]);

//   useEffect(() => {
//     getTripsCruise(firebaseKey).then(setTrips);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleAnswerSubmit = (trips) => {
//     createTrip(firebaseKey, trips)
//       .then((data) => {
//         setAnswers([...trips, data]);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="mt-5">
//       <div className="single-question">
//         <h2>Question： {singleDetails.title}</h2>
//         <p style={{ marginButton: '100px' }}>{singleDetails.definition}</p>
//       </div>
//       <h5 style={{ marginTop: '80px' }}>{answers.length} Answers</h5>
//       <div className="AnswerCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
//         {answers.map((answer) => (
//           <AnswerCard key={answer.firebaseKey} answerObj={answer} onUpdate={getQuestionAnswers} />
//         ))}
//       </div>
//       <div className="mt-5">
//         <h5>Your Answer</h5>
//         <AnswerForm obj={{}} questionId={firebaseKey} onSubmit={handleAnswerSubmit} />
//       </div>
//     </div>
//   );
// }
