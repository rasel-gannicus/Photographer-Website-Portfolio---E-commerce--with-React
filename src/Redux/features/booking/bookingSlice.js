import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 0
}

export const bookingSlice = createSlice({
    name : 'booking',
    initialState,
    reducers : {
        
        }
    })

export const {} = bookingSlice.actions ; 
export default bookingSlice.reducer 