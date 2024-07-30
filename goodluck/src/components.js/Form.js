import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

function Form() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstChange = (e) => setFirst(e.target.value);
  const handleSecondChange = (e) => setSecond(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const validateForm = () => {
    const newErrors = {};

    if (!first.trim()) newErrors.first = 'Firstname is required';
    if (!second.trim()) newErrors.second = 'Secondname is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform the submit action
      console.log('Form submitted:', { first, second, email });
    } else {
      // Set errors to state
      setErrors(validationErrors)
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Firstname</label>
        <input
          type='text'
          placeholder='Name'
          value={first}
          onChange={handleFirstChange}
        />
        {errors.first && <span className="error">{errors.first}</span>}

        <label>Secondname</label>
        <input
          type='text'
          placeholder='Second'
          value={second}
          onChange={handleSecondChange}
        />
        {errors.second && <span className="error">{errors.second}</span>}

        <label>Email</label>
        <input
          type='email'
          placeholder='xxx@example.com'
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
