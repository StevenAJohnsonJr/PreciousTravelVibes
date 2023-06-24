/* eslint-disable */
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteSingleCruise } from '../../api/cruisesData';
import { Container } from 'react-bootstrap';

function CruiseCard({ cruiseObj, onUpdate }) {
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

  const deleteThisCruise = () => {
    if (window.confirm(`Delete ${cruiseObj.first_name}?`)) {
      deleteSingleCruise(cruiseObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div  class="box">
      <div class="glass"></div>
      <div class="content">
      <Card class="cardz" className="cardfont" style={{ width: '21rem', margin: '10px', color: 'whitesmoke'}}>
        <Card.Img variant="top" src="/carnival-venezia-in-nyc.jpg" alt="ship" style={{ height: '218px' }} />
        <Card.Body>
          <Card.Title>
            <img className="veiw" src="location2.png" alt="Location" /> {cruiseObj.cruiseDestion}
          </Card.Title>
          <p className="card-text bold">
            <img className="veiw" src="c34.png" alt="Cruise" /> Departing Date: {cruiseObj.tripCheckInDate}
          </p>
          <p className="card-text bold">
            {' '}
            Returning Date: {cruiseObj.tripCheckOutDate} <img className="veiw" src="c34.png" alt="Cruise" />
          </p>
          <p className="card-text bold">
            <img className="veiw" src="cabin.png" alt="Cabin" /> Number of cabins needed: {cruiseObj.numberOfCabins}
          </p>
          <p className="card-text bold">
            <img className="veiw" src="spec.png" alt="CabinSpec" /> Specification cabin #: {cruiseObj.cabinSpecification}
          </p>
          <p className="card-text bold">
            <img className="veiw" src="c3p.png" alt="Cruisers" /> Number of of cruisers: {cruiseObj.numberOfCruisers}
          </p>
          <p className="card-text bold">
            <img className="veiw" src="hotel.png" alt="Hotel" />
            Will you require a hotel: {cruiseObj.requireHotel}
          </p>
          <p className="card-text bold">
            <img className="veiw" src="choose.png" alt="Hotel" />
            What type of cabin would you like?: {cruiseObj.cabinType}
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>click to read or click view</Accordion.Header>
              <Accordion.Body>
                <p className="card-text bold">
                  <img className="veiw" src="s43.png" alt="Protection" />
                  Would you like to add any protection for your package: {cruiseObj.cruiseProtection}
                </p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="card-text bold">
                  <img className="veiw" src="s98.png" alt="Protection" />
                  Cabin protection: {cruiseObj.cruiseProtection}
                </p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="card-text bold">
                  <img className="veiw" src="e23.png" alt="Email" />
                  Travelers email: {cruiseObj.email}
                </p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="card-text bold">
                  <img className="veiw" src="p23.png" alt="Phone" />
                  Travelers phone: {cruiseObj.phone_number}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="card-text bold">
            <img className="veiw" src="u23.png" alt="User" /> Travelers name: {cruiseObj.first_name} {cruiseObj.last_name}
          </p>
          {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS   */}
          <Container>
          <Link href={`/cruises/${cruiseObj.firebaseKey}`} passHref>
            <button variant="primary" className="m-2">
              VIEW
            </button>
          </Link>
          <Link href={`/cruises/edit/${cruiseObj.firebaseKey}`} passHref>
            <button variant="info">EDIT</button>
          </Link>
          <button variant="danger" onClick={deleteThisCruise} className="">
            DELETE
          </button>
          </Container>
          <button type="button" class="btn btn-outline-secondary" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
          {status}
        </button>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

CruiseCard.propTypes = {
  cruiseObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    cabinComments: PropTypes.string,
    cabinType: PropTypes.string,
    cruiseComments: PropTypes.string,
    cruiseProtection: PropTypes.string,
    includeGratuities: PropTypes.string,
    phone_number: PropTypes.string,
    email: PropTypes.string,
    uid: PropTypes.string,
    numberOfCabins: PropTypes.string,
    numberOfCruisers: PropTypes.string,
    requireHotel: PropTypes.string,
    tripCheckInDate: PropTypes.string,
    tripCheckOutDate: PropTypes.string,
    cruiseDestion: PropTypes.string,
    cabinSpecification: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CruiseCard;
