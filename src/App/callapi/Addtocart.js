import { createSlice } from '@reduxjs/toolkit'



const initialState = [];

export const Addtocart = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    addcart: (state, action) => {

      console.log(action.payload);
      state.push(action.payload);
      action.payload.qty = 1;
      action.payload.proPrice = action.payload.price;
      console.log(state);


    },
    removeCart: (state, action) => {

      const remove = state.filter((state, ind) => ind !== action.payload)
      return remove;

    },

    Pulsqty: (state, action) => {

      const id = action.payload;

      const item = state.find((item) => item.id === id)
      if (item) {
        item.qty += 1;
        item.price = item.proPrice * item.qty;

      }

    },
    Minusqty: (state, action) => {

      const id = action.payload;

      const item = state.find((item) => item.id === id)
      if (item) {
        item.qty -= 1;
        item.price = item.proPrice * item.qty;

      }


    },

  },
})

export const { addcart, removeCart, Pulsqty, Minusqty } = Addtocart.actions

export default Addtocart.reducer