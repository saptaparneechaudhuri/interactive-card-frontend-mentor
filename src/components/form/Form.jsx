import React, { useEffect, useState } from "react";

import "./Form.css";

const defaultFormData = {
  name: "",
  number: "",
  date: "",
  month: "",
  cvc: "",
};

const Form = ({ clicked }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    // console.log(formErrors);
    Object.keys(formErrors).length === 0 && isSubmit && clicked();
  }, [formErrors, clicked]);

  const changeBorderColorOnError = (inputName) => {
    let formInput = document.getElementById(`${inputName}`);
    formInput.classList.toggle("error");
  };

  const handleValidation = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Can't be empty";
      changeBorderColorOnError("name");
    }
    if (!formData.number) {
      errors.number = "Can't be empty";
      changeBorderColorOnError("number");
    } else if (!formData.number.match(/^\d+$/)) {
      errors.number = "Wrong Input, numbers only!";
      changeBorderColorOnError("number");
    }
    if (!formData.date) {
      errors.date = "Can't be empty";
      changeBorderColorOnError("date");
    }
    if (!formData.month) {
      errors.month = "Can't be empty";
      changeBorderColorOnError("month");
    }
    if (!formData.cvc) {
      errors.cvc = "Can't be empty";
      changeBorderColorOnError("cvc");
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/thank-you");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(handleValidation());
    setIsSubmit(true);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-input full-width" id="name">
        <p>Cardholder Name</p>
        <input
          placeholder="e.g. Jane Appleseed"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error-text">{formErrors.name}</span>
      </div>
      <div className="form-input full-width" id="number">
        <p>Card Number</p>
        <input
          placeholder=" e.g. 1234 5678 9123 0000"
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        <span className="error-text">{formErrors.number}</span>
      </div>
      <div className="form-dates full-width">
        <div className="form-date-month-group">
          <div className="form-input exp-date" id="date">
            <p>Exp Date</p>
            <input
              placeholder="MM"
              type="text"
              onChange={handleChange}
              name="date"
              value={formData.date}
            />
            <span className="error-text">{formErrors.date}</span>
          </div>
          <div className="form-input exp-month" id="month">
            <p>(MM/YY)</p>
            <input
              placeholder="YY"
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
            <span className="error-text">{formErrors.month}</span>
          </div>
        </div>

        <div className="form-input cvc" id="cvc">
          <p>CVC</p>
          <input
            placeholder=" e.g. 123"
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.cvc}</span>
        </div>
      </div>
      <button type="submit" className="form-button">
        Confirm
      </button>
    </form>
  );
};

export default Form;
