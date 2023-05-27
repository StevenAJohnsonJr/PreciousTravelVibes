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
  tripReturningDate: '',
  TripDestion: '',
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
          <Form.Control type="url" placeholder="Please enter your first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
        </FloatingLabel>

        {/* TITLE INPUT  */}
        {/* <FloatingLabel controlId="floatingInput1" label="Please enter your last name" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
        </FloatingLabel> */}

        <FloatingLabel controlId="floatingInput1" label="Please enter your 10 digit phone number" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your 10 digit phone number" name="last_name" value={formInput.phone_number} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Please enter your email" className="mb-3">
          <Form.Control type="text" placeholder="Please enter your email" name="last_name" value={formInput.email} onChange={handleChange} required />
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
          How would you like tro be contacted?     
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

        
         {/* <FloatingLabel controlId="floatingInput3" label="Please enter breif description about your company" className="mb-3">
          <Form.Control type="text" placeholder="company_descrpition" name="company_descrpition" value={formInput.company_descrpition} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Please tell us where your company's headquaters is" className="mb-3">
          <Form.Control type="text" placeholder="company_location" name="company_location" value={formInput.company_location} onChange={handleChange} required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Give us a #" className="mb-3">
          <Form.Control type="text" placeholder="company_tag" name="company_tag" value={formInput.company_tag} onChange={handleChange} required />
        </FloatingLabel> */}

        {/* SUBMIT BUTTON  */}
        <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Trip</Button>
      </Form>
    </div>
  );
}

TripForm.propTypes = {
  companyObj: PropTypes.shape({
    tripDepartingDate: PropTypes.string,
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