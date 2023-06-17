/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import CloseButton from 'react-bootstrap/Button';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { deleteSingleCruise } from '../../api/cruisesData';

function CruiseTable({ cruiseObj, onUpdate }) {
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
    <div className="triptable">
      <Table striped>
        <thead>
          <tr>
            <th>Cruises To Be Booked</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Destination</th>
            <th>Returning Date</th>
            <th>Departure Date</th>
            <th>Number of Cruisers</th>
            <th>Action</th>
            <th>Current Progress</th>
            <th>Delete Trip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cruise Package for:</td>
            <td>{cruiseObj.first_name}</td>
            <td>{cruiseObj.last_name}</td>
            <td>{cruiseObj.cruiseDestion}</td>
            <td>{cruiseObj.tripCheckInDate}</td>
            <td>{cruiseObj.tripCheckOutDate}</td>
            <td>{cruiseObj.numberOfCabins}</td>
            <td>
              <Link href={`/cruise/${cruiseObj.firebaseKey}`} passHref>
                <Button variant="primary" className="m-2">
                  VIEW
                </Button>
              </Link>
            </td>
            <td>
              <Button className="m-2" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
                {status}
              </Button>
            </td>{' '}
            <td>
              <Button variant="danger" onClick={deleteThisCruise} className="m-2">
                DELETE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

CruiseTable.propTypes = {
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

export default CruiseTable;
