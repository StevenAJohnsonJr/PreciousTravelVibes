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
  tripReturningDate: '',
  TripDestion: '',
};

function TripForm({ obj }) {
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

        <input type="number" id="product-quantity" class="form-control single-product-qty input-sm" name="quantity" min="1" max="999" value="1" pattern="[0-9]*"></input>
        <input type="hidden" name="variant_id" value="201"></input>

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
        
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          Where would you like to explore?     
          <Form.Check
            inline
            label="Jamicia"
            name="Jamaicia"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Mexico"
            name="Mexico"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="Hawaii"
            name="Hawaii"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="US City"
            name="US City"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="Cruise"
            name="Cruise"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="Dubai"
            name="Dubai"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="Disney"
            name="Disney"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}

        <FloatingLabel controlId="floatingInput3" label="Anything else that you would like us to know?" className="mb-3">
          <Form.Control type="text" placeholder="tripComments" name="tripComments" value={formInput.tripComments} onChange={handleChange} required />
        </FloatingLabel> 
         
        <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Trip</Button>
      </Form>
    </div>
  );
}

TripForm.propTypes = {
  companyObj: PropTypes.shape({
    tripDepartingDate: PropTypes.string,
    tripDepartingLocation:PropTypes.string,
    mehtodOfContact: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    emailMailingList:PropTypes.string,
    uid: PropTypes.string,
    tripComments: PropTypes.string,
    TripDestion: PropTypes.string,
    tripReturningDate: PropTypes.string,
    first_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

TripForm.defaultProps = {
  obj: initialState,
};

export default TripForm;