import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UrlType {
  id: number;
  url: string;
}

const initialUrl = {
  urllist: [] as UrlType[],
};

const urlSlice = createSlice({
  name: "url",
  initialState: initialUrl,
  reducers: {
    addUrl: (state, action: PayloadAction<UrlType>) => {
      state.urllist.push(action.payload);
    },
    deleteUrl: (state, action: PayloadAction<number>) => {
      state.urllist = state.urllist.filter((url) => url.id !== action.payload);
    },
    editUrl: (state, action: PayloadAction<UrlType>) => {
      const index = state.urllist.findIndex((url) => url.id === action.payload.id);
      state.urllist[index] = action.payload;
    },
  },
});

export const { addUrl, deleteUrl, editUrl } = urlSlice.actions;
export default urlSlice.reducer;

