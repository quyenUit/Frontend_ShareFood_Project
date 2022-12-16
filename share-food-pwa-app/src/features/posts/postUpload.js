import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../components/constants/apiURL";

export const postUpload = createAsyncThunk(
  "post/upload",
  async (
    { name, type, dateStart, dateEnd, location, file, email, amount },
    { rejectWithValue }
  ) => {
    try {
      // "http://localhost:3001/uploadpost"
      const { data } = await axios.post(`${apiUrl}/uploadpost`, {
        name,
        type,
        dateStart,
        dateEnd,
        location,
        file,
        email,
        amount,
      });
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
