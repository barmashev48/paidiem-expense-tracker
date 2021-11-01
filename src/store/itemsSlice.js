import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Chris",
      email: "chris@gmail.com",
      amount: 1000,
      paid: true,
    },
    {
      id: 2,
      name: "Joan",
      email: "joan@gmail.com",
      amount: 3000,
      paid: false,
    },
    {
      id: 3,
      name: "Mike",
      email: "mike@gmail.com",
      amount: 7000,
      paid: false,
    },
  ],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log("item added");
      state.items.unshift(action.payload);
    },
    removeItem(state, action) {
      console.log("item removed");
      const newItems = state.items.filter((el) => el.id !== action.payload);
      state.items = newItems;
    },
    changePaidStatus(state, action) {
      const newItems = state.items.map((el) => {
        if (el.id === action.payload) {
          el.paid = !el.paid;
        }
      });
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
