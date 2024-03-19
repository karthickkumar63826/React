import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: true,
  users: [],
  isError: false,
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  let response = await fetch("https://fakestoreapi.com/users");
  let data = await response.json();
  return data;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isError = true;
    });
  },
});


export default userSlice.reducer;