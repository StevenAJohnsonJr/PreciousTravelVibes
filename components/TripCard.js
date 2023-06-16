/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleTrip } from '../api/tripsData';

function TripsCard({ tripObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  //  SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS

  const [clickCount, setClickCount] = useState(0);
  const [status, setStatus] = useState('not started');

  const handleClick = () => {
    let newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 1) {
      setStatus('not started');
    } else if (newClickCount === 2) {
      setStatus('in progress');
    } else if (newClickCount === 3) {
      setStatus('completed');
    }
  };

  let buttonColor = '';
  if (clickCount === 2) {
    buttonColor = 'yellow';
  } else if (clickCount === 3) {
    buttonColor = 'green';
  }

  const deleteThisTrip = () => {
    if (window.confirm(`Delete ${tripObj.first_name}?`)) {
      deleteSingleTrip(tripObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src="/r31.jpg" alt="plane" style={{ height: '218px' }} />
      <Card.Body>
        <Card.Title>{tripObj.tripDestion}</Card.Title>
        <p className="card-text bold"> Departing Date: {tripObj.tripDepartingDate}</p>
        <p className="card-text bold"> Returning Date: {tripObj.tripReturningDate}</p>
        <p className="card-text bold"> Are these dates flexible: {tripObj.flexibleDates}</p>
        <p className="card-text bold">My preferred method of contact is: {tripObj.mehtodOfContact}</p>
        <p className="card-text bold">Am I added to the email mailing list: {tripObj.emailMailingList}</p>
        <p className="card-text bold">Anything else you want us to know: {tripObj.tripComments}</p>
        <p className="card-text bold">Travelers name: {tripObj.first_name} {tripObj.last_name}</p>
        <p className="card-text bold">Travelers phone: {tripObj.phone_number}</p>
        <p className="card-text bold">Travelers email:  {tripObj.email}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS   */}
        <Link href={`/trips/${tripObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/trips/edit/${tripObj.firebaseKey}`} passHref>
          <Button src="CCxiK5APZlnu.gif" variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisTrip} className="m-2">
          DELETE
        </Button>
      </Card.Body>
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        {status}
      </button>
    </Card>
    </div>
  );
}

TripsCard.propTypes = {
  tripObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    flexibleDates: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
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
