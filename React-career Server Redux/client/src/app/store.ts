import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import registerReducer from '../view/components/form/registerSlice'
import loginReducer from '../view/components/form/loginSlice'
import historyReducer from '../view/components/homePage/historySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
    login: loginReducer,
    history: historyReducer,
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
