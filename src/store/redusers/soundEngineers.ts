import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type soundEngineer = { photo: string; name: string; surname: string };
export type soundEngineersState = {
  soundEngineers: soundEngineer[];
};
const mockState: soundEngineer[] = [
  {
    photo: 'https://i.ibb.co/9VDZ2mx/image.png',
    name: 'Константин',
    surname: 'Изотов',
  },
  {
    photo: 'https://i.ibb.co/7K8f6Q1/image.png',
    name: 'Давид',
    surname: 'Хозиев',
  },
];

const initialState: soundEngineersState = {
  soundEngineers: mockState,
};

const soundEngineers = createSlice({
  name: 'soundEngineers',
  initialState,
  reducers: {},
});

export default soundEngineers.reducer;
