/* eslint-disable */
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleTrip } from '../../api/tripsData';
import { Container } from 'react-bootstrap';

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
    <div  class="box">
      <div class="glass"></div>
      <div class="content">
      <Card class="cardz" className="cardfont" style={{ height: 'auto', width: '20rem', margin: '10px', color: 'whitesmoke'}}>
        <Card.Img variant="top" src="/r14.jpg" alt="plane" style={{ height: '218px' }} />
        <Card.Body>
        <span>
          <Card.Title><img className="veiw" src="l2.png" alt="Location"/> {tripObj.tripDestion}</Card.Title>
          <p className="card-text bold"> <img className="veiw" src="pl1.png" alt="Departing Date"/> Departing On: {tripObj.tripDepartingDate}</p>
          <p className="card-text bold">  Returning On: {tripObj.tripReturningDate} <img className="veiw" src="pl2.png" alt="Returning Date"/></p>
          <p className="card-text bold"> <img className="veiw" src="cal.png" alt="MOD"/> Are these dates flexible: {tripObj.flexibleDates}</p>
          <p className="card-text bold"> <img className="veiw" src="m2.png" alt="Calendar"/> My preferred method of contact is: {tripObj.mehtodOfContact}</p>
          <Accordion defaultActiveKey="0">
              <Accordion.Item class="card3" eventKey="1">
                <Accordion.Header>click to read or click view</Accordion.Header>
                <Accordion.Body><p className="card-text bold"> <img className="veiw" src="phone2.png" alt="Phone"/>Travelers #: {tripObj.phone_number}</p></Accordion.Body>
                <Accordion.Body><p className="card-text bold"> <img className="veiw" src="email3.png" alt="Email"/>Travelers email:  {tripObj.email}</p></Accordion.Body>
                <Accordion.Body><p className="card-text bold"> <img className="veiw" src="o3.png" alt="Mailing List:"/>Am I added to the email mailing list: {tripObj.emailMailingList}</p></Accordion.Body>
                <Accordion.Body><p className="card-text bold"> <img className="veiw" src="comments.png" alt="Comments"/>Comments: {tripObj.tripComments}</p></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          <p className="card-text bold"> <img className="veiw" src="45u.png" alt="User"/> My Name: {tripObj.first_name} {tripObj.last_name}</p>
          {/* DYNAMIC LINK TO VIEW THE TRIP DETAILS */}
          <Container>
          <Link className="edit" href={`/trips/edit/${tripObj.firebaseKey}`} passHref>
            <button variant="info">EDIT
            </button>
          </Link>
          <Link href={`/trips/${tripObj.firebaseKey}`} passHref>
            <button variant="primary" className="m-2">View
            {/* <img className="veiw" src="view.png" alt="View"/> */}
            </button>
          </Link>
          <Button  className="delete " variant="danger" onClick={deleteThisTrip}>
            DELETE
          </Button>
          </Container>
          </span>
        </Card.Body>
        <button type="button" class="btn btn-outline-secondary" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
          {status}
        </button>
      </Card>
      </div>
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
