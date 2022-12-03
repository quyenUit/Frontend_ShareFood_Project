import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postList = createAsyncThunk("post/show", async () => {
  try {
    const { data } = await axios.get(
      "https://sharefoodapp-369208.as.r.appspot.com/post"
    );
    return data;
  } catch (err) {
    return err;
  }
});
