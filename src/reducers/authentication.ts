import { createSlice } from "@reduxjs/toolkit";

export const authenficationSlice = createSlice({
  name: 'authenfication',
  initialState: {
    authenficated: false,
    token: ""
  },
  reducers: {
    auth(state, action) {
      state.authenficated = true
      state.token = action.payload
    },
    logout(state) {
      state.token = ""
      state.authenficated = false
    }
  }
})

export default authenficationSlice.reducer