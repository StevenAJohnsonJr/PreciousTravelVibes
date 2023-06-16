/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTrip } from '../api/tripsData';
import TripsCard from '../components/TripCard';

function Trips() {
  // TODO: Set a state for books
  const [trips, setTrips] = useState([]);
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();
  // TODO: create a function that makes the API call to get all the books
  const getAllTheTrips = () => {
    getTrip(user.uid).then(setTrips);
  };
  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheTrips();
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {/* TODO: map over books here using BookCard component */}
      {trips.map((trip) => (
        <TripsCard key={trip.firebaseKey} tripObj={trip} onUpdate={getAllTheTrips} />
      ))}
    </div>
  );
}
export default Trips;
