/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCruise } from '../../api/cruisesData';

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
              <h1>Congratulations</h1> {cruiseDetails.first_name} on booking a cruise with us. Good vibes only your paradise is located in：{cruiseDetails.cruiseDestion}
              <p style={{ marginButton: '100px' }}>
                {cruiseDetails.first_name} you will be leaving on: {cruiseDetails.tripCheckInDate} and returning on: {cruiseDetails.tripCheckOutDate}.{' '}
              </p>
              <p style={{ marginButton: '100px' }}>The number of cruisers accompanying you to your paradise in your party is: {cruiseDetails.numberOfCruisers}</p>
              <p style={{ marginButton: '100px' }}>
                Just make sure we got it correct you have chosen {cruiseDetails.numberOfCabins} cabin(s) for this trip. We wouldnt want to get that wrong. Your cabin of choice is the {cruiseDetails.cabinType} cabin. You also answered "{cruiseDetails.cruiseProtection}" to our cruise protection package, and "{cruiseDetails.includeGratuities}" to include gratuities in your quote.{' '}
              </p>
              <p style={{ marginButton: '100px' }}>The comments you left for us are as follows: {cruiseDetails.cruiseComments}</p>
              <p style={{ marginButton: '100px' }}>The comments you left for us are as follows: {cruiseDetails.cruiseComments}</p>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
