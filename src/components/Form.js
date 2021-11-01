import React from "react";
import useInput from "../hooks/useInput";
import { itemsActions } from "../store/itemsSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const {
    value: enteredName,
    isValueValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
    inputChangeHandler: nameInputChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValueValid: emailIsValid,
    hasError: emailHasError,
    reset: emailReset,
    inputChangeHandler: emailInputChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredAmount,
    isValueValid: amountIsValid,
    hasError: amountHasError,
    reset: amountReset,
    inputChangeHandler: amountInputChangeHandler,
    blurHandler: amountBlurHandler,
  } = useInput((value) => /^\d+$/.test(value));

  let formIsValid = false;

  if (nameIsValid && emailIsValid && amountIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    const newPaymentItem = {
      id: Math.floor(Math.random() * 100000),
      name: enteredName,
      email: enteredEmail,
      amount: enteredAmount,
      paid: false,
    };

    dispatch(itemsActions.addItem(newPaymentItem));

    nameReset();
    emailReset();
    amountReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const amountInputClasses = amountHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <h1>Your Company's Payroll</h1>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">To:</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameInputChangeHandler}
          />
          {!!nameHasError && (
            <p className="error-text">Name field must not be empty</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailInputChangeHandler}
          />
          {!!emailHasError && (
            <p className="error-text">E-mail field has an error</p>
          )}
        </div>
        <div className={amountInputClasses}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={enteredAmount}
            onBlur={amountBlurHandler}
            onChange={amountInputChangeHandler}
          />
          {!!amountHasError && (
            <p className="error-text">Amount field has an error</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
