/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCruise } from '../../../api/cruisesData';

export default function ShowCruiseDetails() {
  const router = useRouter();
  const [cruiseDetails, setCruiseDetails] = useState({});

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleCruise(firebaseKey).then(setCruiseDetails);
  }, [firebaseKey]);

  return (
    <div>
      <div className="body2" class="c2">
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>We Got Work To Do!!!</h1> {cruiseDetails.first_name} is looking to book a cruise with us. {cruiseDetails.first_name} is looking for paradise in：{cruiseDetails.cruiseDestion}
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name} wants to leave on: {cruiseDetails.tripCheckInDate} and return on: {cruiseDetails.tripCheckOutDate}.
              </p>
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name} has {cruiseDetails.numberOfCruisers} cruiser(s) in his party.
              </p>
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name} needs {cruiseDetails.numberOfCabins} cabin(s) for this cruise. Our guest has chosen the {cruiseDetails.cabinType} cabin.
              </p>
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name} also answered "{cruiseDetails.cruiseProtection}" to our cruise protection package, and "{cruiseDetails.includeGratuities}" to include gratuities in quote.
              </p>
              <p style={{ marginButton: '100px' }}>
                As for our guest needing a hotel {cruiseDetails.first_name} answered {cruiseDetails.requireHotel}.
              </p>
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name}s contact number is answered {cruiseDetails.phone_number}.
              </p>
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name}s contact email {cruiseDetails.email}
              </p>
              <p style={{ marginButton: '100px' }}>
                {' '}
                Lastly {cruiseDetails.first_name} left the following vomments: {cruiseDetails.cruiseComments}
              </p>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
