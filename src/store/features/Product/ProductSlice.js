import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //aca se define todas las variables globales
    //del componente cpunter.js
  initialValue: 10,
  dataProduct: [ 
    {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
    {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
    {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
    {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
    {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
    {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setInitialValue: (state, payload) =>{
        state.initialValue = payload
    },
    setdataProduct: (state, payload) =>{
        state.dataProduct = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setInitialValue, setdataProduct } = productSlice.actions

export default productSlice.reducer