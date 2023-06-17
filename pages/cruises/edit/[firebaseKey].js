import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCruise } from '../../../api/cruisesData';
import CruiseForm from '../../../components/forms/CruiseForm';

export default function EditCruise() {
  const [editCruise, setEditCruise] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleCruise(firebaseKey).then(setEditCruise);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<CruiseForm obj={editCruise} />);
}
