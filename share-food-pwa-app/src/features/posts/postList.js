import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postList = createAsyncThunk("post/show", async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/post");
    return data;
  } catch (err) {
    return err;
  }
});
