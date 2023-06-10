/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createCruise, getCruise, updateCruise } from '../../api/cruisesData';

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
  tripReturningDate: '',
  cruiseDestion: '',
  phone_number: '',
  email: '',
  cabinSpecification: '',
};

function CruiseForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setCruises] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCruise(user.uid).then(setCruises);

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
      updateCompany(formInput).then(() => router.push(`/cruise/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCruise(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCruise(patchPayload).then(() => {
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

      <FloatingLabel controlId="floatingInput2" label="Guest1 please enter your first name" className="mb-3">
        <Form.Control type="text" placeholder="Guest1 please enter your first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your last name" className="mb-3">
        <Form.Control type="text" placeholder="Guest1 please enter your last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel> 

      <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your 10 digit phone number" className="mb-3">
        <Form.Control type="text" placeholder="Guest1 please enter your 10 digit phone number" name="phone_number" value={formInput.phone_number} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your email" className="mb-3">
        <Form.Control type="text" placeholder="Guest1 please enter your email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="How many people will be cruising?" className="mb-3">
        <Form.Control type="number" placeholder="How many people will be cruising?" name="numberOfCruisers" value={formInput.numberOfCruisers} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="How many cabins do you need?" className="mb-3">
        <Form.Control type="number" placeholder="How many cabins will your party need?" name="numberOfCabins" value={formInput.numberOfCabins} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="If more than one cabin please specify how many in each cabin (if zero put 0)." className="mb-3">
        <Form.Control type="number" placeholder="If more than one cabin please specify how many in each cabin." name="cabinSpecification" value={formInput.cabinSpecification} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Please enter your departing date (mm/dd/yyyy)" className="mb-3">
        <Form.Control type="text" placeholder="Please enter your departing date" name="tripCheckInDate" value={formInput.tripCheckInDate} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Please enter your returning date (mm/dd/yyyy)" className="mb-3">
        <Form.Control type="text" placeholder="Please enter your returning date" name="tripCheckOutDate" value={formInput.tripCheckOutDate} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="What is your cabin type: Interior, Oceanview, or Balcony" className="mb-3">
        <Form.Control type="text" placeholder="What is your cabin type: Interior, Oceanview, or Balcony" name="cabinType" value={formInput.cabinType} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Would you like to include cruise protection?" className="mb-3">
        <Form.Control type="text" placeholder="Would you ;ike to include cruise protection?" name="cruiseProtection" value={formInput.cruiseProtection} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Would you like to include gratuities?" className="mb-3">
        <Form.Control type="text" placeholder="Would you like to include gratuities?" name="includeGratuities" value={formInput.includeGratuities} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="If you are arriving to your desried location before cruise departure date (highly recommened) would you like a hotel quote also?" className="mb-3">
        <Form.Control type="text" placeholder="If you are arriving to your desried location before cruise departure date (highly recommened) would you like a hotel quote also?" name="requireHotel" value={formInput.requireHotel} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Where would you like to cruise to?" className="mb-3">
        <Form.Control type="text" placeholder="Where would you like to cruise to?" name="cruiseDestion" value={formInput.cruiseDestion} onChange={handleChange} required />
      </FloatingLabel>
    
      <FloatingLabel controlId="floatingInput1" label="Do you have any comments for us?" className="mb-3">
        <Form.Control type="text" placeholder="Do you have any comments for us?" name="cruiseComments" value={formInput.cruiseComments} onChange={handleChange} required />
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
    phone_number:PropTypes.string,
    cabinSpecification: PropTypes.string
   
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

CruiseForm.defaultProps = {
  obj: initialState,
};

export default CruiseForm;
