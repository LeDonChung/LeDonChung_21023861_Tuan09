import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    try {
        const response = await axios.get('https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos?completed=false')
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
const updateTodos = createAsyncThunk('updateTodos', async (data) => {
    try {
        const response = await axios.put(`https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos/${data.id}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }

})
const todoSlice = createSlice({
  name: "todos",
  initialState: {value: []},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.value = action.payload 
    }) 
    builder.addCase(updateTodos.fulfilled, (state, action) => {
        
    })
  }
});

export {fetchTodos, updateTodos}
export default todoSlice.reducer;