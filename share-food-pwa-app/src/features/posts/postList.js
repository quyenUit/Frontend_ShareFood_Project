import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../components/constants/apiURL";

export const postList = createAsyncThunk("post/show", async () => {
  try {
    // "http://localhost:3001/post"
    const { data } = await axios.get(`${apiUrl}/post`);
    return data;
  } catch (err) {
    return err;
  }
});
