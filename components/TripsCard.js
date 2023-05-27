// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import { deleteSingletrip } from '../api/tripData';
// import { deleteSingleTrip } from '../api/tripsData';
// // import { deleteSingletrip } from '../api/tripData';

// function TripsCard({ tripObj, onUpdate }) {
//   // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
//   // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
//   const deleteThisTrip = () => {
//     if (window.confirm(`Delete ${tripObj.first_name}?`)) {
//       deleteSingleTrip(tripObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (<Card style={{ width: '18rem', margin: '10px' }}>
//  <Card.Body>
//         <Card.Title>{tripObj.tripDestion}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{tripObj.tripDepartingDate} - {tripObj.tripReturningDate}</Card.Subtitle>
//         <Card.Body>{tripObj.emailMailingList}</Card.Body>
//         <Card.Body>{tripObj.emailMailingList}</Card.Body>
//         <Card.Body>{tripObj.mehtodOfContact}</Card.Body>
//         <Card.Body>{tripObj.tripComments}</Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );

// }

// tripCard.propTypes = {
//   tripObj: PropTypes.shape({
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     favorite: PropTypes.bool,
//     email: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default tripCard;
