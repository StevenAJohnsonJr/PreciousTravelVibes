/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTrip, getTrip, updateTrip } from '../../api/tripsData';
import { propTypes } from 'react-bootstrap/esm/Image';

const initialState = {
  first_name: '',
  last_name: '',
  cabinComments: '',
  cabinType: '',
  cruiseComments: '',
  cruiseProtection: '',
  includeGratuities: '',
  numberOfCabins: '',
  numberOfCruisers: '',
  requireHotel: '',
  tripCheckInDate: '',
  tripCheckOutDate: '',
  numberOfCruisers: '',
  tripReturningDate: '',
  cruiseDestion: '',
  phone_number: '',
  email: '',
};

function CruiseForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
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

        <FloatingLabel controlId="floatingInput2" label="Please enter Guest 1's first name" className="mb-3">
          <Form.Control type="url" placeholder="Please enter your first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
        </FloatingLabel>

        {/* TITLE INPUT  */}
        <FloatingLabel controlId="floatingInput1" label="Please enter Guest 1's last name" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
        </FloatingLabel> 

        <FloatingLabel controlId="floatingInput1" label="Please enter your 10 digit phone number" className="mb-3">
          <Form.Control type="Number" placeholder="Please enter your 10 digit phone number" name="phone_number" value={formInput.phone_number} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please enter Guest 1's email" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your email" name="email" value={formInput.email} onChange={handleChange} required />
        </FloatingLabel>

        {/* BUSINESS_TITLE INPUT  */}
        <Form.Check
        className="text-white mb-3"
        type="switch"
        id="emailMailingList"
        name="emailMailingList"
        label="Would you like to be added to the email mailing list"
        checked={formInput.emailMailingList}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            emailMailingList: e.target.checked,
          }));
        }}
      />

{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          What is your preferred method of contact?     
          <Form.Check
            inline
            label="Phone"
            name="Phone"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Email"
            name="Email"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Either"
            name="Either"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
 <input
          type="date"
          label="tripDepartingDate"
          name="tripDepartingDate"
          placeholder="Departing Date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(event) => handleDateChange(new Date(event.target.value))}
        />

<input 
          type="date"
          label="tripReturningDate"
          name="tripReturningDate"
          placeholder="Returning Date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(event) => handleDateChange(new Date(event.target.value))}
        />

{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          Are your dates flexible?     
          <Form.Check
            inline
            label="Yes"
            name="Yes"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="No"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}

          <FloatingLabel controlId="floatingInput3" label="Please tell us your departing location" className="mb-3">
          <Form.Control type="text" placeholder="tripDepartingLocation" name="tripDepartingLocation" value={formInput.tripDepartingLocation} onChange={handleChange} required />
        </FloatingLabel>
        
        <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

        <FloatingLabel controlId="floatingInput3" label="Anything else that you would like us to know?" className="mb-3">
          <Form.Control type="text" placeholder="tripComments" name="tripComments" value={formInput.tripComments} onChange={handleChange} required />
        </FloatingLabel> 
         
        <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Trip</Button>
      </Form>
    </div>
  );
}

CruiseForm.propTypes = {
  cruiseObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    cabinComments:PropTypes.string,
    cabinType: PropTypes.string,
    cruiseComments: PropTypes.string,
    cruiseProtection: PropTypes.string,
    includeGratuities:PropTypes.string,
    uid: PropTypes.string,
    numberOfCabins: PropTypes.string,
    numberOfCruisers: PropTypes.string,
    requireHotel: PropTypes.string,
    tripCheckInDate: PropTypes.string,
    tripCheckOutDate:PropTypes.string,
    cruiseDestion: PropTypes.string,
    firebaseKey: PropTypes.string,
    phone_number: PropTypes.string    
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

CruiseForm.defaultProps = {
  obj: initialState,
};

export default CruiseForm;
