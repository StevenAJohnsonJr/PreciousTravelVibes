/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
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
      updateCruise(formInput).then(() => router.push(`/cruises/${obj.firebaseKey}`));
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
    <div className="divPic">
      <Form className="form2" onSubmit={handleSubmit}>
        <h1 style={{ marginTop: '50px', textAlign: 'center', color: 'white' }}>Paradise Cruise Form</h1>
        <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Your Paradise </h2>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput2" label="Guest1 please enter your first name" className="label">
            <input type="text" placeholder="" name="first_name" value={formInput.first_name} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        {/* TITLE INPUT  */}
        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your last name" className="label">
            <input type="text" placeholder="" name="last_name" value={formInput.last_name} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your 10 digit phone number" className="label">
            <input type="text" placeholder="" name="phone_number" value={formInput.phone_number} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <div class="input-group">
          <FloatingLabel controlId="floatingInput1" label="Guest1 please enter your email" className="label">
            <input type="text" placeholder="" name="email" value={formInput.email} onChange={handleChange} required />
          </FloatingLabel>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="How many people will be cruising?" className="label">
              <input type="number" placeholder="" name="numberOfCruisers" value={formInput.numberOfCruisers} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="How many cabins do you need?" className="label">
              <input type="number" placeholder="" name="numberOfCabins" value={formInput.numberOfCabins} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="If more than one cabin please specify how many in each cabin (if zero put 0)." className="label">
              <input type="number" placeholder="" name="cabinSpecification" value={formInput.cabinSpecification} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="Please enter your departing date (mm/dd/yyyy)" className="label">
              <input type="text" placeholder="" name="tripCheckInDate" value={formInput.tripCheckInDate} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="Please enter your returning date (mm/dd/yyyy)" className="label">
              <input type="text" placeholder="" name="tripCheckOutDate" value={formInput.tripCheckOutDate} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="What is your cabin type: Interior, Oceanview, or Balcony" className="label">
              <input type="text" placeholder="" name="cabinType" value={formInput.cabinType} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="Would you like to include cruise protection?" className="label">
              <input type="text" placeholder="" name="cruiseProtection" value={formInput.cruiseProtection} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="Would you like to include gratuities?" className="label">
              <input type="text" placeholder="" name="includeGratuities" value={formInput.includeGratuities} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="If you are arriving to your desried location before cruise departure date (highly recommened) would you like a hotel quote also?" className="label">
              <input type="text" placeholder="" name="requireHotel" value={formInput.requireHotel} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <div class="input-group">
            <FloatingLabel controlId="floatingInput1" label="Where would you like to cruise to?" className="label">
              <input type="text" placeholder="" name="cruiseDestion" value={formInput.cruiseDestion} onChange={handleChange} required />
            </FloatingLabel>
          </div>

          <FloatingLabel controlId="floatingInput1" label="Do you have any comments for us?" className="label">
            <input type="textarea" rows="8" placeholder="" name="cruiseComments" value={formInput.cruiseComments} onChange={handleChange} required />
          </FloatingLabel>
        </div>

        <button type="submit" style={{ alignItems: 'center'}}>{obj.firebaseKey ? 'Update' : 'Create'} Trip</button>
      </Form>
    </div>
  );
}

CruiseForm.propTypes = {
  cruiseObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    cabinComments: PropTypes.string,
    cabinType: PropTypes.string,
    cruiseComments: PropTypes.string,
    cruiseProtection: PropTypes.string,
    includeGratuities: PropTypes.string,
    uid: PropTypes.string,
    numberOfCabins: PropTypes.string,
    numberOfCruisers: PropTypes.string,
    requireHotel: PropTypes.string,
    tripCheckInDate: PropTypes.string,
    tripCheckOutDate: PropTypes.string,
    cruiseDestion: PropTypes.string,
    firebaseKey: PropTypes.string,
    phone_number: PropTypes.string,
    cabinSpecification: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

CruiseForm.defaultProps = {
  obj: initialState,
};

export default CruiseForm;
