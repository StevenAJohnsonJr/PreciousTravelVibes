/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
// import CloseButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteSingleCruise } from '../api/cruisesData';

function CruiseCard({ cruiseObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  //  SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisCruise = () => {
    if (window.confirm(`Delete ${cruiseObj.first_name}?`)) {
      deleteSingleCruise(cruiseObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={cruiseObj.first_name} alt={cruiseObj.last_name} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{cruiseObj.cruiseDestion}</Card.Title>
        <p className="card-text bold"> Departing Date: {cruiseObj.tripCheckInDate}</p>
        <p className="card-text bold"> Returning Date: {cruiseObj.tripCheckOutDate}</p>
        <p className="card-text bold">Number of cabins needed: {cruiseObj.numberOfCabins}</p>
        <p className="card-text bold">Number of of cruisers: {cruiseObj.numberOfCruisers}</p>
        <p className="card-text bold">Cabin specification: {cruiseObj.cruiseProtection}</p>
        <p className="card-text bold">Will you require a hotel: {cruiseObj.requireHotel}</p>
        <p className="card-text bold">Would you like to add any protection for your package: {cruiseObj.cruiseProtection}</p>
        {/* <p className="card-text bold">Traveler's name: {cruiseObj.first_name} {cruiseObj.last_name}</p> */}
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS   */}
        <Link href={`/trips/${cruiseObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/cruise/edit/${cruiseObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCruise} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
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
    uid: PropTypes.string,
    numberOfCabins: PropTypes.string,
    numberOfCruisers: PropTypes.string,
    requireHotel: PropTypes.string,
    tripCheckInDate: PropTypes.string,
    tripCheckOutDate: PropTypes.string,
    cruiseDestion: PropTypes.string,
    cabinSpecification: PropTypes.string,
    firebaseKey: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CruiseCard;
