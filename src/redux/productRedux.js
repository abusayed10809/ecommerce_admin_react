import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // network status loading
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // network status success
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    // network status failure
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete loading
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // delete success
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    // delete failed
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // update loading
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // update success
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    // update failed
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // add loading
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // add success
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    // add failed
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
