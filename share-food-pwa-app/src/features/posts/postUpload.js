import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUpload = createAsyncThunk(
  "post/upload",
  async (
    { name, type, dateStart, dateEnd, location, file, email , amount},
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/uploadpost",
        {
          name,
          type,
          dateStart,
          dateEnd,
          location,
          file,
          email,
          amount
        }
      );
      return data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
