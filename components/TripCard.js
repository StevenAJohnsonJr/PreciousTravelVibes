/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { deleteSingleTrip } from '../api/tripsData';
// import Link from 'next/link';
// import { Button } from 'bootstrap';

function TripsCard({ tripObj }) {
  //   FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  //    SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  // const deleteThisTrip = () => {
  //   if (window.confirm(`Delete ${tripObj.first_name}?`)) {
  //     deleteSingleTrip(tripObj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={tripObj.first_name} alt={tripObj.last_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{tripObj.tripDestion}</Card.Title>
        <p className="card-text bold">
          {tripObj.tripDepartingDate}
          {tripObj.tripReturningDate}
        </p>
        <p className="card-text bold">{tripObj.mehtodOfContact}</p>
        <p className="card-text bold">{tripObj.emailMailingList}</p>
        <p className="card-text bold">{tripObj.tripComments}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        {/* <Link href={`/trips/${tripObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        {/* <Link href={`/trips/edit/${tripObj.firebaseKey}`} passHref> */}
        {/* <Button variant="info">EDIT</Button> */}
        {/* </Link> */}
        {/* <Button variant="danger" onClick={deleteThisTrip} className="m-2">
           DELETE
         </Button>  */}
      </Card.Body>
    </Card>
  );
}

TripsCard.propTypes = {
  tripObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    emailMailingList: PropTypes.string,
    mehtodOfContact: PropTypes.string,
    tripComments: PropTypes.string,
    tripDestion: PropTypes.string,
    tripDepartingDate: PropTypes.string,
    tripReturningDate: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default TripsCard;
