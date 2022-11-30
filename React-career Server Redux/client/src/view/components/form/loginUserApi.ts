import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAsync = createAsyncThunk(
  'login/findUser',

  async (payload: any) => {

    const { data } = await axios.post('/api/user/login', { payload });

    return data;

  }
);
