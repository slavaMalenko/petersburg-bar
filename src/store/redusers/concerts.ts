import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TConcerts = { src?: string }[];

const prevConcertsMock: TConcerts = [
  { src: 'https://i.ibb.co/r7gj2sc/Rectangle-32.png' },
  { src: 'https://i.ibb.co/KbqC2dL/Rectangle-33.png' },
  { src: 'https://i.ibb.co/fS8wnLv/Rectangle-34.png' },
  { src: 'https://i.ibb.co/RCrs33g/Rectangle-35.png' },
];
const soonConcertsMock: TConcerts = [
  { src: 'https://i.ibb.co/RCrs33g/Rectangle-35.png' },
  { src: 'https://i.ibb.co/r7gj2sc/Rectangle-32.png' },
  { src: 'https://i.ibb.co/KbqC2dL/Rectangle-33.png' },
  { src: 'https://i.ibb.co/fS8wnLv/Rectangle-34.png' },
];

export type concertsState = {
  prevConcerts: TConcerts;
  soonConcerts: TConcerts;
};

const initialState: concertsState = {
  prevConcerts: prevConcertsMock,
  soonConcerts: soonConcertsMock,
};

const concerts = createSlice({
  name: 'concerts',
  initialState,
  reducers: {},
});

export default concerts.reducer;
