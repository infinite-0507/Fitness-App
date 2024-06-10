import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Details.scss";

const Details = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    designation: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('details-background');
    return () => {
      document.body.classList.remove('details-background');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (profile.age <= 0 || profile.age > 100) {
      errors.age = 'Age must be a positive value and not more than 100';
    }
    if (profile.height <= 0 || profile.height > 200) {
      errors.height = 'Height must be a positive value and not more than 200 cm';
    }
    if (profile.weight <= 0 || profile.weight > 120) {
      errors.weight = 'Weight must be a positive value and not more than 120 kg';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post('http://localhost:3300/profile', profile);
        sessionStorage.setItem('age', profile.age); // Store the age in session storage
        setSubmitted(true);
        navigate('/Plans');
      } catch (error) {
        console.error('There was an error saving the profile!', error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Profile Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={profile.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={profile.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" name="age" value={profile.age} onChange={handleChange} required />
            {errors.age && <p className="error">{errors.age}</p>}
          </label>
        </div>
        <div>
          <label>
            Height (cm):
            <input type="number" name="height" value={profile.height} onChange={handleChange} required />
            {errors.height && <p className="error">{errors.height}</p>}
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input type="number" name="weight" value={profile.weight} onChange={handleChange} required />
            {errors.weight && <p className="error">{errors.weight}</p>}
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select name="gender" value={profile.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Designation:
            <select name="designation" value={profile.designation} onChange={handleChange} required>
              <option value="">Select Designation</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Athlete">Athlete</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Details;
