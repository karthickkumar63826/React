import {

  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

let initialState = {
  isLoading: true,
  content: [],
  isError: false,
};

export const fetchContent = createAsyncThunk("fetchContent", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });

    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default contentSlice.reducer;
