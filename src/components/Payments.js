import React from "react";
import { useSelector } from "react-redux";
import PaymentItem from "./PaymentItem";

const Items = () => {
  const items = useSelector((state) => state.itemsReducer.items);

  return (
    <div>
      {items.map((el) => (
        <PaymentItem
          id={el.id}
          key={el.id}
          name={el.name}
          email={el.email}
          amount={el.amount}
          paid={el.paid}
        />
      ))}
    </div>
  );
};

export default Items;
