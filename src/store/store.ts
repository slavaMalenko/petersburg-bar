import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  navigation,
  concerts,
  menu,
  technicalRider,
  soundEngineers,
} from './redusers';

const store = configureStore({
  reducer: { navigation, concerts, menu, technicalRider, soundEngineers },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDicpatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
