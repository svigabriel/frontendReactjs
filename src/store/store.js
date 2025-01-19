import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/Counter/counterSlice.js';
import productReducer from './features/Product/ProductSlice';
import formReducer from './features/Form/FormSlice.js';

//import userReducer from './features/user/userReducer.js'
//import userProduct from './features/user/userProduct.js'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    form : formReducer,
    //user: userReducer,  
    //product: userProduct,
  },
});
export default store;