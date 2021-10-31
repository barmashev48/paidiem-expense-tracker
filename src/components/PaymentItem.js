import React from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";

const PaymentItem = ({ name, email, amount, paid, id }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(itemsActions.removeItem(id));
  };

  const changePaidStatus = () => {
    dispatch(itemsActions.changePaidStatus(id));
  };
  return (
    <div>
      <p>{name}</p>
      <p>{amount}</p>
      <p>{email}</p>
      {paid ? <p>paid</p> : <p>not paid</p>}
      <button onClick={changePaidStatus}>Change paid</button>
      <button onClick={removeItemHandler}>Remove</button>
    </div>
  );
};

export default PaymentItem;
