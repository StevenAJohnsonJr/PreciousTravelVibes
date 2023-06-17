import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTrip } from '../../../api/tripsData';
import TripForm from '../../../components/forms/TripForm';

export default function EditTrip() {
  const [editTrip, setEditTrip] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleTrip(firebaseKey).then(setEditTrip);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<TripForm obj={editTrip} />);
}
