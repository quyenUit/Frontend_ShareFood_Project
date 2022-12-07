import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../components/constants/apiURL";
import axios from "axios";


export const allUserFetch = createAsyncThunk("allUser/fetch", async() => {
    try{
        const {data} = await axios.get(`${apiUrl}/users/list`);

        if(data){
            return data
        }
    }catch(err){
        return {
            message: "Error"
        }
    }
})