import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:false,
  // users:[],
  users : (localStorage.getItem("users") &&
    JSON.parse(localStorage.getItem("users"))) ||
  [],
  errorMsg : ""
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserFetch: (state) => {
      state.isLoading = false
    },
    getUserFetchSucess: (state,action) => {
      state.isLoading = false
      state.users = action.payload
      localStorage.setItem("users",JSON.stringify(state.users))
    },
    getUserFetchFail: (state, action) => {
      state.errorMsg = action.payload
    },
    updateUser: (state, action) => {
      const { id, user } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
    
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...user };
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
    
      if (userIndex !== -1) {
        state.users.splice(userIndex, 1);
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },        
  },
})

// Action creators are generated for each case reducer function
export const { getUserFetch, getUserFetchSucess, getUserFetchFail,updateUser,deleteUser } = userSlice.actions

export default userSlice.reducer