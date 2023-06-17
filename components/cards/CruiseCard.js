/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteSingleCruise } from '../../api/cruisesData';

function CruiseCard({ cruiseObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  //  SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const [color, setColor] = useState('yellow');

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === 'yellow' ? 'green' : 'yellow'));
  };

  const deleteThisCruise = () => {
    if (window.confirm(`Delete ${cruiseObj.first_name}?`)) {
      deleteSingleCruise(cruiseObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/carnival-venezia-in-nyc.jpg" alt="ship" style={{ height: '218px' }} />
        <Card.Body>
          <Card.Title>{cruiseObj.cruiseDestion}</Card.Title>
          <p className="card-text bold"> Departing Date: {cruiseObj.tripCheckInDate}</p>
          <p className="card-text bold"> Returning Date: {cruiseObj.tripCheckOutDate}</p>
          <p className="card-text bold">Number of cabins needed: {cruiseObj.numberOfCabins}</p>
          <p className="card-text bold">Specification cabin number: {cruiseObj.cabinSpecification}</p>
          <p className="card-text bold">Number of of cruisers: {cruiseObj.numberOfCruisers}</p>
          <p className="card-text bold">Cabin protection: {cruiseObj.cruiseProtection}</p>
          <p className="card-text bold">Will you require a hotel: {cruiseObj.requireHotel}</p>
          <p className="card-text bold">What type of cabin would you like?: {cruiseObj.cabinType}</p>
          <p className="card-text bold">Would you like to add any protection for your package: {cruiseObj.cruiseProtection}</p>
          <p className="card-text bold">
            Travelers name: {cruiseObj.first_name} {cruiseObj.last_name}
          </p>
          <p className="card-text bold">Travelers email: {cruiseObj.email}</p>
          <p className="card-text bold">Travelers phone: {cruiseObj.phone_number}</p>
          {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS   */}
          <Link href={`/cruises/${cruiseObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">
              VIEW
            </Button>
          </Link>
          <Link href={`/cruises/edit/${cruiseObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisCruise} className="m-2">
            DELETE
          </Button>
          <button style={{ backgroundColor: color, width: '20px', height: '20px' }} onClick={handleButtonClick}></button>
        </Card.Body>
      </Card>
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
