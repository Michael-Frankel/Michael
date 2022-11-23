import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import registerReducer from '../view/components/form/registerSlice'
import loginReducer from '../view/components/form/loginSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
