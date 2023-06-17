/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getCruise } from '../api/cruisesData';
import CruiseCard from '../components/cards/CruiseCard';

function CruisesPage() {
  // TODO: Set a state for cruises
  const [cruises, setCruises] = useState([]);
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();
  // TODO: create a function that makes the API call to get all the cruises
  const getAllCruises = () => {
    getCruise(user.uid).then(setCruises);
  };
  // TODO: make the call to the API to get all the cruises on component render
  useEffect(() => {
    getAllCruises();
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {/* TODO: map over books here using BookCard component */}
      {cruises.map((cruise) => (
        <CruiseCard key={cruise.firebaseKey} cruiseObj={cruise} onUpdate={getAllCruises} />
      ))}
    </div>
  );
}
export default CruisesPage;
