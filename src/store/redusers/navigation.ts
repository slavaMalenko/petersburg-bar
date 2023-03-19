import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type navigationState = {
  activeNavigation: string;
};

const initialState: navigationState = {
  activeNavigation: localStorage.getItem('path') || '/',
};

const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationActive(state, action: PayloadAction<string>) {
      state.activeNavigation = action.payload;
    },
  },
});

export const { setNavigationActive } = navigation.actions;
export default navigation.reducer;
