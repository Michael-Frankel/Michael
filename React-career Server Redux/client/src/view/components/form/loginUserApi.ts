import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Joi from 'joi';


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loginAsync = createAsyncThunk(
  'login/findUser',
  async (payload: any) => {
    console.log(payload, "async");

    const { data } = await axios.post('/api/user/login', { payload });
    // The value we return becomes the `fulfilled` action payload

    if (data.ok === true) {
      console.log(data.result.ok, "fulfilled");

    } else {
      console.log("falsiiiiiiin");
      
    }


    return data.result;
  }
);
