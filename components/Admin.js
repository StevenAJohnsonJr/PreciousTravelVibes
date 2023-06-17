/* eslint-disable */
import React, { useState } from 'react';

import TripsCard from './cards/TripCard';
import CruiseCard from './cards/CruiseCard';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [trips, setTrips] = useState([]);
  const [cruises, setCruises] = useState([]);

  // Function to fetch trips and cruises data
  const fetchData = () => {
    // Only fetch data if user is admin
    if (isAdmin) {
      // Fetch trips data
      fetch('/trips')
        .then((response) => response.json())
        .then((data) => setTrips(data));

      // Fetch cruises data
      fetch('/cruises')
        .then((response) => response.json())
        .then((data) => setCruises(data));
    }
  };

  // Function to toggle admin status
  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <button onClick={fetchData}>Today's ToDo's</button>
      <button onClick={toggleAdmin}>{isAdmin ? 'Revoke Admin Access' : 'Grant Admin Access'}</button>

      {isAdmin && (
        <div>
          <h2>Trips:</h2>
          <ul>
            {trips.map((trip) => (
              <li>
                <TripsCard key={trip.firebaseKey} tripObj={trip} onUpdate={getAllTheTrips} />
              </li>
            ))}
          </ul>

          <h2>Cruises:</h2>
          <ul>
            {cruises.map((cruise) => (
              <li>
                <CruiseCard key={cruise.firebaseKey} cruiseObj={cruise} onUpdate={getAllCruises} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
