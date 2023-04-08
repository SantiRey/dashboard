import { createSlice } from '@reduxjs/toolkit';

export type messageStructur = {
  id: string;
  author: string;
  message: string;
  timestamp: string;
};

export type ticketStructur = {
  id: string;
  creationDate: string;
  title: string;
  description: string;
  assignation: string;
  status: string;
  message: messageStructur[];
};

const ticketInitilization: ticketStructur = {
  id: '',
  creationDate: '',
  title: '',
  description: '',
  assignation: '',
  status: '',
  message: [],
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: ticketInitilization,
  reducers: {
    addTicket: (state, action) => {
      // eslint-disable-next-line no-unused-labels
      state = action.payload;
    },
    addMessage: (state, action) => {
      state.message = [...state.message, action.payload];
    },
  },
});

export const { addMessage, addTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
