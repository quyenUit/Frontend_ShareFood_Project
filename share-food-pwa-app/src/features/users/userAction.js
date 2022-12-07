import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
<<<<<<< HEAD
        "http://localhost:3001/signup",
=======
        "https://sharefoodapp-369208.as.r.appspot.com/signup",
>>>>>>> a7afefc69480ad321ae625fcbc1a0dc68583dbcf
        {
          username,
          password,
        }
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
