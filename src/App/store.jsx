import { configureStore } from '@reduxjs/toolkit'
import Addtocart from './callapi/Addtocart'

export const store = configureStore({
  reducer: {
    addtocart: Addtocart,
  },
})
