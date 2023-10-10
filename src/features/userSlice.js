import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Srikanth'},
    {id: '1', name: 'Shree'},
    {id: '2', name: 'Sri'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer