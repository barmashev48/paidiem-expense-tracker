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

  const itemClasses = paid ? "payment-item paid" : "payment-item not-paid";
  return (
    <div className={itemClasses}>
      <div className="item-info">
        <p>{name}</p>
        <p>${amount}</p>
        <p>{email}</p>
        {paid ? <p>Paid</p> : <p>Not Paid</p>}
      </div>
      <div className="item-control">
        <button onClick={changePaidStatus}>Change Status</button>
        <button onClick={removeItemHandler}>Remove</button>
      </div>
    </div>
  );
};

export default PaymentItem;
