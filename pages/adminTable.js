/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getTrip } from '../api/tripsData';
import { getCruise } from '../api/cruisesData';
import TripsTable from '../components/tables/TripsTable';
import CruiseTable from '../components/tables/CruiseTable';

function AdminTable() {
  // TODO: Set a state for trips
  const [trips, setTrips] = useState([]);
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();
  // TODO: create a function that makes the API call to get all the trips
  const getAllTheTrips = () => {
    getTrip(user.uid).then(setTrips);
  };
  // TODO: make the call to the API to get all the trips on component render
  useEffect(() => {
    getAllTheTrips();
  }, []);

  // TODO: Set a state for cruises
  const [cruises, setCruises] = useState([]);
  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();
  // TODO: create a function that makes the API call to get all the cruises
  const getAllCruises = () => {
    getCruise(user.uid).then(setCruises);
  };
  // TODO: make the call to the API to get all the cruises on component render
  useEffect(() => {
    getAllCruises();
  }, []);

  return (
    <div>
      <Container
        className="logo"
        style={
        {
          display: 'flex',
          flexDirection: 'row',
          width: '20%',
          heigh: '20%',
        }
    }>
        <div>
          <Image src="/toot2.jpg" className="card-img-top" alt="ceo" />
        </div>
      </Container>
      <br/>
      <h6>TRIPS</h6>
      <br/>
      <Container>
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {trips.map((trip) => (
            <TripsTable key={trip.firebaseKey} tripObj={trip} onUpdate={getAllTheTrips} />
          ))}
        </div>
      </Container>
      <br/>
      <h6>CRUISES</h6>
      <br/>
      <Container>
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {cruises.map((cruise) => (
            <CruiseTable key={cruise.firebaseKey} cruiseObj={cruise} onUpdate={getAllCruises} />
          ))}
        </div>
      </Container>
    </div>
  );
}
export default AdminTable;
