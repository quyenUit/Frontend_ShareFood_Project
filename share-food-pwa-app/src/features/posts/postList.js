import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postList = createAsyncThunk("post/show", async () => {
  try {
    const { data } = await axios.get(
      "https://backend-sharefood-project.herokuapp.com/post"
    );
    return data;
  } catch (err) {
    return err;
  }
});
