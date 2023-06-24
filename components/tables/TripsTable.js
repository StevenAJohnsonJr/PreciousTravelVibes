/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import { deleteSingleTrip } from '../../api/tripsData';
import { Container } from 'react-bootstrap';

function TripsTable({ tripObj, onUpdate }) {
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
    <div className="triptable">
      <Container>
      <Table responsive style={{ borderBox: '30px'}}>
        <thead>
          <tr>
            <th>Trips To Be Booked </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Destination </th>
            <th>Returning Date </th>
            <th>Departure Date </th>
            <th>Contact Method </th>
            <th>Action </th>
            <th>Current Progress </th>
            <th>Delete Trip </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trip Package for:</td>
            <td>{tripObj.first_name}</td>
            <td>{tripObj.last_name}</td>
            <td>{tripObj.tripDestion}</td>
            <td>{tripObj.tripDepartingDate}</td>
            <td>{tripObj.tripReturningDate}</td>
            <td>{tripObj.mehtodOfContact}</td>
            <td>
            
              <Link href={`/trips/adminTable/${tripObj.firebaseKey}`} passHref>
                <Button variant="primary" className="m-2">
                  VIEW
                </Button>
              
              </Link>
              </td>
            <td>
              <Link href="" passHref>
              <Button className="m-2" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
                {status}
              </Button>
              </Link>
            </td>{' '}
            <td>
            <Link href="" passHref>
            <Button variant="danger" onClick={deleteThisTrip} className="m-2">
                DELETE
              </Button>
          </Link>
              
            </td>
          </tr>
        </tbody>
      </Table>
      
      </Container>
    </div>
  );
}

TripsTable.propTypes = {
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

export default TripsTable;
