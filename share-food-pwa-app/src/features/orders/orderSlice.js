import { fetchOrders } from "./orderAction";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNeedOrders } from "./orderAction";

const initialState = {
  orders: null,
  status: "idle",
  error: null,
};

export const getOrderManage = (state, userEmail) =>
  state.order.orders.filter((order) => order.userPostEmail === userEmail);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNeedOrders.fulfilled, (state, action) => {
        state.needOrders = action.payload;
      });
  },
});

export default orderSlice.reducer;
