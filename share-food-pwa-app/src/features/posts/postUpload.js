import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUpload = createAsyncThunk(
  "post/upload",
  async (
    { name, type, dateStart, dateEnd, location, file, email },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(
        "https://backend-sharefood-project.herokuapp.com/uploadpost",
        { name, type, dateStart, dateEnd, location, file, email }
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
