import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../components/constants/apiURL";
import axios from "axios";


export const fetchOrders = createAsyncThunk("order/fetch", async() => {
    try{
        const {data} = await axios.get(`${apiUrl}/orders/list`);

        if(data){
            return data
        }
    }catch(err){
        return {
            message: "Error"
        }
    }
})