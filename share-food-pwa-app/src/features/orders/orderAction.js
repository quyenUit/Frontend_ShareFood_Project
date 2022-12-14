import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../components/constants/apiURL";
import axios from "axios";


export const fetchOrders = createAsyncThunk("order/fetch", async(userPostEmail) => {
    try{
        const {data} = await axios.get(`${apiUrl}/orders/list/${userPostEmail}`);

        if(data){
            return data.data
        }
    }catch(err){
        return {
            message: "Error"
        }
    }
})


export const fetchNeedOrders = createAsyncThunk("Needorder/fetch", async(userId) => {
    try{
        const {data} = await axios.get(`${apiUrl}/order/${userId}`);

        if(data){
            return data.data
        }
    }catch(err){
        return {
            message: "Error"
        }
    }
})