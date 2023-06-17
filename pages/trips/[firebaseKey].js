/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Import the modified createTrips function that uses fetch
import { getTripsCruise } from '../../api/tripsData';
import { viewTripDetails } from '../../api/mergeData';
// import TripsCard from '../../components/TripCard';
import CruiseCard from '../components/cards/CruiseCard';

export default function Viewtrip() {
  const [singleTripDetails, setTripDetails] = useState({});
  const [trips, setTrips] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewTripDetails(firebaseKey).then(setTripDetails);
  }, [firebaseKey]);

  useEffect(() => {
    getTripsCruise(firebaseKey).then(setTrips);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleTripSubmit = (trips) => {
  //   createTrip(firebaseKey, trips)
  //     .then((data) => {
  //       setTrips([...trips, data]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className="mt-5">
      <div className="single-question">
        <h2>Congrats {singleTripDetails.first_name} on booking good vibes in：{singleTripDetails.tripDestion}</h2>
        <p style={{ marginButton: '100px' }}>You will be leaving from {singleTripDetails.tripDepartingLocation} on: {singleTripDetails.tripDepartingDate} and returning on: {singleTripDetails.tripReturningDate}</p>
        <p style={{ marginButton: '100px' }}>The number of travelers in your party is: {singleTripDetails.numberOfTraverlers}</p>
        <p style={{ marginButton: '100px' }}>Your preffered method of contact is: {singleTripDetails.mehtodOfContact}</p>
        <h5>
        <h5 style={{ marginTop: '80px' }}>Trips: {trips.length} </h5>
        </h5>
      </div>
      <div className="d-flex flex-wrap">
        {singleTripDetails.cruise?.map((cruises) => (
          <CruiseCard key={cruises.firebaseKey} obj={cruisesruises} onUpdate={viewTripDetails} />
        ))}
      </div>
    </div>
  );
}
