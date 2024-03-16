import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const fetAllUser = createAsyncThunk(
    'users/fetAllUser',
    async () => {
      let res = await axios.get('http://localhost:8080/users/all')
      return res.data
    },
 
  )
const initialState = {
    listUser: [],
    isLoading: false,
    isError: false

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetAllUser.pending, (state, action) => {
        state.listUser = [];
        state.isLoading = true;
        state.isError = false 
       
      })
      .addCase(fetAllUser.fulfilled, (state, action) => {
        state.listUser = action.payload;
        state.isLoading = false;
        state.isError = false 
       
      })
      .addCase(fetAllUser.rejected, (state, action) => {
        state.listUser = [];
        state.isLoading = false;
        state.isError = true ;

        
      })
  },
})

  


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer