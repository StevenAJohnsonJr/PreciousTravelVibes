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
  flexibleDates: '',
  tripReturningDate: '',
  tripDestion: '',
  tripDepartingLocation: '',
  emailMailingList: '',
  email: '',
  mehtodOfContact: '',
  phone_number: '',

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
    <div className="divPic2">

      <Form className="form2" class="border border-danger" onSubmit={handleSubmit}>
       <h1 style={{ marginTop: '50px', textAlign: 'center', color: 'white' }}>Travel Interest Form</h1>
        <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Your Paradise </h2>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput2" label="Please enter your first name" className="label">
            <input type="text" placeholder="" name="first_name" value={formInput.first_name} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        {/* TITLE INPUT  */}
        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please enter your last name" className="label">
            <input type="text" placeholder="" name="last_name" value={formInput.last_name} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please enter your 10 digit phone number" className="label">
            <input type="Number" placeholder="" name="phone_number" value={formInput.phone_number} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please enter your email" className="label">
            <input type="text" placeholder="" name="email" value={formInput.email} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Would you like to be part of our email mailing list?" className="label">
            <input type="text" placeholder="" name="emailMailingList" value={formInput.emailMailingList} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="What is your preferred method of contact?" className="label">
            <input type="text" placeholder="" name="mehtodOfContact" value={formInput.mehtodOfContact} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please enter your departing date (mm/dd/yyyy)" className="label">
            <input type="text" placeholder="" name="tripDepartingDate" value={formInput.tripDepartingDate} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please enter your returning date (mm/dd/yyyy)" className="label">
            <input type="text" placeholder="" name="tripReturningDate" value={formInput.tripReturningDate} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please tell us if your dates are flexible" className="label">
            <input type="text" placeholder="" name="flexibleDates" value={formInput.flexibleDates} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please tell us how many persons in your travel party?" className="label">
            <input type="text" placeholder="" name="numberOfTraverlers" value={formInput.numberOfTraverlers} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Please tell us where you are departing from (city and state please)" className="label">
            <input type="text" placeholder="" name="tripDepartingLocation" value={formInput.tripDepartingLocation} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Where is your paradise (desired destination)" className="label">
            <input type="text" placeholder="" name="tripDestion" value={formInput.tripDestion} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Is there anything that you would like us to know?" className="label">
            <input type="text" placeholder="" name="tripComments" value={formInput.tripComments} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Trip</button>
      </Form>


    </div>
  );
}

TripForm.propTypes = {
  tripObj: PropTypes.shape({
    tripDepartingDate: PropTypes.string,
    tripDepartingLocation: PropTypes.string,
    flexibleDates: PropTypes.string,
    mehtodOfContact: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    emailMailingList: PropTypes.string,
    uid: PropTypes.string,
    tripComments: PropTypes.string,
    tripDestion: PropTypes.string,
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