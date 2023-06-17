/* eslint-disable @next/next/no-img-element */
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
    <div className="single-question">
      <div className="single-question">
        <h2>
          Congrats {cruiseDetails.first_name} on booking ocean vibes with us. Your pardaise that you have choosen is：{cruiseDetails.cruiseDestion}
        </h2>
        <p style={{ marginButton: '100px' }}>
          You will be leaving out on: {cruiseDetails.tripCheckInDate} and returning on: {cruiseDetails.tripCheckOutDate}
        </p>
        <p style={{ marginButton: '100px' }}>
          The type of cabin you have choosen for your vibe on the ocean is: {cruiseDetails.cabinType}, for this cruise you requested {cruiseDetails.numberOfCabins} cabin(s) for you party of {cruiseDetails.numberOfCruisers}.
        </p>
        <p style={{ marginButton: '100px' }}>Your preffered method of contact is: {cruiseDetails.mehtodOfContact}</p>
      </div>
      <div>
        {/* <CompanyCard companyObj={cruiseDetails} />
            </div>
            <div style={{ marginTop: '50px' }}>
                <AboutCompanyCard companyObj={cruiseDetails} /> */}
      </div>
    </div>
  );
}
