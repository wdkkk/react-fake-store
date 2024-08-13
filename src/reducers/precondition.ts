import { createSlice } from "@reduxjs/toolkit";

export const preconditionSlice = createSlice({
  name: 'precondition',
  initialState: {
    checked: false,
  },
  reducers: {
    check(state) {
      state.checked = true
    },
  }
})

export default preconditionSlice.reducer