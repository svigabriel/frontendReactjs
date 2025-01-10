import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/Counter/counterSlice.js'
//import userReducer from './features/user/userReducer.js'
//import userProduct from './features/user/userProduct.js'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    //user: userReducer,  
    //product: userProduct,
  },
});
export default store;