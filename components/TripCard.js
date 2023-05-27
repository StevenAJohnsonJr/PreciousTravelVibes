/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleTrip } from '../api/tripsData';

function TripsCard({ tripObj, onUpdate }) {
  //   FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  //    SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisTrip = () => {
    if (window.confirm(`Delete ${tripObj.first_name}?`)) {
      deleteSingleTrip(tripObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>Trip Destination: {tripObj.tripDestion}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {tripObj.tripDepartingDate} - {tripObj.tripReturningDate}
        </Card.Subtitle>
        <Card.Body>
          Full Name: {tripObj.first_name} {tripObj.last_name}
        </Card.Body>
        <Card.Body>Email List: {tripObj.emailMailingList}</Card.Body>
        <Card.Body>I preffer to be contacted by: {tripObj.mehtodOfContact}</Card.Body>
        <Card.Body>Any Comments: {tripObj.tripComments}</Card.Body>
        <CloseButton id="closeButton" variant="white" onClick={deleteThisTrip} className="m-2">
          X
        </CloseButton>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
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
  onUpdate: PropTypes.func.isRequired,
};

export default TripsCard;
