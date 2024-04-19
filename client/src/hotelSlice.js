import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataHotels: [],
  checkIn: '',
  checkOut: '',
  totalPrice: 0,
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setDataHotels: (state, action) => {
      state.dataHotels = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setDataHotels, setCheckIn, setCheckOut, setTotalPrice } = hotelSlice.actions;

export default hotelSlice.reducer;
