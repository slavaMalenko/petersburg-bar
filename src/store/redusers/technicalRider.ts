import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type technicalRiderState = {
  title: string;
  description: string[];
};

const mockData: technicalRiderState[] = [
  {
    title: 'Loudspeakers',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
      'Acoustic system BELL Sub 1000W x 2',
      'Front monitor Yamaha SM12V 300w x 2',
      'Backside monitor Dynacord 500W x 2',
    ],
  },
  {
    title: 'Amplifier',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
    ],
  },
  {
    title: 'FOH',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
      'Acoustic system BELL Sub 1000W x 2',
      'Front monitor Yamaha SM12V 300w x 2',
    ],
  },
  {
    title: 'Backline',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
      'Acoustic system BELL Sub 1000W x 2',
      'Front monitor Yamaha SM12V 300w x 2',
      'Backside monitor Dynacord 500W x 2',
    ],
  },
  {
    title: 'Microphone set',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
      'Acoustic system BELL Sub 1000W x 2',
    ],
  },
  {
    title: 'DJ equipment',
    description: [
      'Acoustic system BELL Top 600W x 2',
      'Acoustic system BELL Mid 600W x 2',
      'Acoustic system BELL Sub 1000W x 2',
      'Front monitor Yamaha SM12V 300w x 2',
      'Backside monitor Dynacord 500W x 2',
    ],
  },
];

const initialState: { technicalRiderList: technicalRiderState[] } = {
  technicalRiderList: mockData,
};

const technicalRider = createSlice({
  name: 'technicalRider',
  initialState,
  reducers: {},
});

export default technicalRider.reducer;
