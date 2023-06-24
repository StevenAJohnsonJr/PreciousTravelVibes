/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// // Import the modified createTrips function that uses fetch
// import { viewTripDetails } from '../../api/mergeData';
// import TripsCard from '../../components/TripCard';
// import { CruiseCard } from '../../components/cards/CruiseCard';
import { getTripsCruise } from '../../../api/tripsData';

export default function Viewtrip() {
  const [tripDetails, setTripDetails] = useState({});
//   const [trips, setTrips] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;
 
  // TODO: make call to API layer to get the data
//   useEffect(() => {
//     viewTripDetails(firebaseKey).then(setTripDetails);
//   }, [firebaseKey]);

  useEffect(() => {
    getTripsCruise(firebaseKey).then(setTripDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="body2" class="c2">
        <div class="b2">
          <span></span>
          <div class="c3">
          <h2>Congrats {tripDetails.first_name} on booking goo0000000d vibes in：{tripDetails.tripDestion}</h2>
        <p style={{ marginButton: '100px' }}>You will be leaving from {tripDetails.tripDepartingLocation} on: {tripDetails.tripDepartingDate} and returning on: {tripDetails.tripReturningDate}</p>
        <p style={{ marginButton: '100px' }}>Clent will be leaving from {tripDetails.tripDepartingLocation} on: {tripDetails.tripDepartingDate} and returning on: {tripDetails.tripReturningDate}</p>
        <p style={{ marginButton: '100px' }}>You will be leaving from {tripDetails.tripDepartingLocation} on: {tripDetails.tripDepartingDate} and returning on: {tripDetails.tripReturningDate}</p>
        <p style={{ marginButton: '100px' }}>The number of travelers in your party is: {tripDetails.numberOfTraverlers}</p>
        <p style={{ marginButton: '100px' }}>Your preffered method of contact is: {tripDetails.mehtodOfContact}</p>
        <h5>
        {/* <h5 style={{ marginTop: '80px' }}>Trips: {trips.length} </h5> */}
        </h5>
          </div>
        </div>
        </div>
  );
}
