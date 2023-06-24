/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getTripAdmin } from '../api/tripsData';
import { getCruiseAdmin } from '../api/cruisesData';
import TripsTable from '../components/tables/TripsTable';
import CruiseTable from '../components/tables/CruiseTable';

function AdminTable() {
  // TODO: Set a state for trips

  const [trips, setTrips] = useState([]);
  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();
  // TODO: create a function that makes the API call to get all the trips
  const getAllTheTrips = () => {
    getTripAdmin().then(setTrips);
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
    getCruiseAdmin().then(setCruises);
  };
  // TODO: make the call to the API to get all the cruises on component render
  useEffect(() => {
    getAllCruises();
  }, []);

  return (
    <div >
      <Container
      class="position-absolute top-0 start-50 translate-middle"
        className="logo"
        style={
        {
          display: 'flex',
          flexDirection: 'row',
          width: '200%',
          heigh: '200%',
        }
    }>
        
      </Container>
      <br/>
      <h1 style={{ marginTop: '50px', textAlign: 'center', color: 'white' }}>TRIPS</h1>
      <br/>
      
      <Container className="tableC" variant="light">
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {trips.map((trip) => (
            <TripsTable key={trip.firebaseKey} tripObj={trip} onUpdate={getAllTheTrips} style={{ color: 'white' }}/>
          ))}
        </div>
      </Container>
      <br/>
      <h1 style={{ marginTop: '50px', textAlign: 'center', color: 'white' }}>CRUISES </h1>
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
