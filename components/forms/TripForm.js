/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTrip, getTrip, updateTrip } from '../../api/tripsData';

const initialState = {
  first_name: '',
  last_name: '',
  tripComments: '',
  tripDepartingDate: '',
  tripDepartingLocation: '',
  dateFlexable: '',
  tripReturningDate: '',
  TripDestion: '',
  tripDepartingLocation: '',
  emailMailingList: '',
  email: '',
  mehtodOfContact: '',

};

function TripForm({ obj }) {
 const [formInput, setFormInput] = useState(initialState);
 const [setTrip] = useState([]);
 const router = useRouter();
 const { user } = useAuth();

  useEffect(() => {
    getTrip(user.uid).then(setTrip);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateTrip(formInput).then(() => router.push(`/trips/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createTrip(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTrip(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <div>
      <h2>Travel Interest Form</h2>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Your Paradise </h2>

        <FloatingLabel controlId="floatingInput2" label="Please enter your first name" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
        </FloatingLabel>

        {/* TITLE INPUT  */}
        <FloatingLabel controlId="floatingInput1" label="Please enter your last name" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
        </FloatingLabel> 

        <FloatingLabel controlId="floatingInput1" label="Please enter your 10 digit phone number" className="mb-3">
          <Form.Control type="Number" placeholder="Please enter your 10 digit phone number" name="phone_number" value={formInput.phone_number} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please enter your email" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your email" name="email" value={formInput.email} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Would you like to be part of our email mailing list?" className="mb-3">
          <Form.Control type="text" placeholder="Would you like to be part of the email mailing list?" name="emailMailingList" value={formInput.emailMailingList} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="What is your preferred method of contact?" className="mb-3">
          <Form.Control type="text" placeholder="What is your preferred method of contact?" name="mehtodOfContact" value={formInput.mehtodOfContact} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please enter your departing date (mm/dd/yyyy)" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your departing date" name="tripDepartingDate" value={formInput.tripDepartingDate} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please enter your returning date (mm/dd/yyyy)" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your returning date" name="tripReturningDate" value={formInput.tripReturningDate} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please tell us if your dates are flexible" className="mb-3">
          <Form.Control type="text" placeholder="Please tell us if your daters are flexible" name="dateFlexable" value={formInput.dateFlexable} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please tell us where you are departing from (city and state please)" className="mb-3">
          <Form.Control type="text" placeholder="Please tell us where you are departing from (city and state please)" name="tripDepartingLocation" value={formInput.tripDepartingLocation} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Where is your paradise (desired destination)" className="mb-3">
          <Form.Control type="text" placeholder="Where is your paradise (desired destination)" name="TripDestion" value={formInput.TripDestion} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Is there anything that you would like us to know?" className="mb-3">
          <Form.Control type="text" placeholder="Is there anything that you would like us to know?" name="tripComments" value={formInput.tripComments} onChange={handleChange} required />
        </FloatingLabel>
      
        <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Trip</Button>
      </Form>
    </div>
  );
}

TripForm.propTypes = {
  companyObj: PropTypes.shape({
    tripDepartingDate: PropTypes.string,
    tripDepartingLocation: PropTypes.string,
    dateFlexable: PropTypes.string,
    mehtodOfContact: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    emailMailingList:PropTypes.string,
    uid: PropTypes.string,
    tripComments: PropTypes.string,
    TripDestion: PropTypes.string,
    tripReturningDate: PropTypes.string,
    first_name: PropTypes.string,
    numberOfTraverlers: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

TripForm.defaultProps = {
  obj: initialState,
};

export default TripForm;