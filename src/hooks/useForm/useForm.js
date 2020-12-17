import React, { useState } from 'react';

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Fill in a valid email.',
  },
  password: {
    regex: /^(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
    message:
      'Your password must contain at least 8 characters, containing letters and numbers.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Use only numbers.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function handleValidateFields(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Please fill in a value.');
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) handleValidateFields(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    handleValidateFields: () => handleValidateFields(value),
    onBlur: () => handleValidateFields(value),
  };
};

export default useForm;
