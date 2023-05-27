import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { getTrip } from '../api/tripsData';
import TripsCard from '../components/TripCard';

function Home() {
  const [trips, setTrips] = useState([]);
  const [count, setCount] = useState(0);

  const getAllTrips = () => {
    getTrip()
      .then((data) => {
        if (Array.isArray(data)) {
          setTrips(data);
          setCount(data.length); // here is updating the count
        } else {
          console.error('Invalid response from API: expected an array');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <div style={{ marginTop: '50px' }}>
      <Row>
        <Col sm={8}>
          <div className="containerQuestion">
            <div
              style={{
                marginTop: '50px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3>All Trips</h3>
              <div>
                <Link href="/trips/new" passHref>
                  <Button variant="info">My Trips</Button>
                </Link>
              </div>
            </div>
            <h5 style={{ marginTop: '30px' }}>{count} Trips</h5>
            <div className="d-flex flex-wrap" style={{ width: '100%', color: 'black', marginBottom: '50px' }}>
              {/* check if questions is an array before mapping */}
              {Array.isArray(trips) && trips.map((trip) => <TripsCard key={trips.firebaseKey} tripObj={trip} onUpdate={getAllTrips} />)}
            </div>
          </div>
        </Col>
        <Col sm={4} />
      </Row>
    </div>
  );
}

export default Home;
