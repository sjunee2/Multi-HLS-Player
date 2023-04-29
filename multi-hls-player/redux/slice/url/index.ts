import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UrlType {
  id: number;
  url: string;
  playable: boolean;
}

interface InitialType {
  urlList: UrlType[]
};

const initialUrl: InitialType = {
  urlList: [{id: 0, url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8", playable: true}]
}

const urlSlice = createSlice({
  name: "url",
  initialState: initialUrl,
  reducers: {
    addUrl: (state, action: PayloadAction<string>) => {
      const url = {
        id: Math.random(),
        url: action.payload,
        playable: true,
      };

      state.urlList.push(url);
    },
    deleteUrl: (state, action: PayloadAction<number>) => {
      state.urlList = state.urlList.filter((url) => url.id !== action.payload);
    },
    editUrl: (state, action: PayloadAction<UrlType>) => {
      const index = state.urlList.findIndex((url) => url.id === action.payload.id);
      state.urlList[index] = action.payload;
    },
    changePlayable: (state, action: PayloadAction<number>) => {
      const index = state.urlList.findIndex((url) => url.id === action.payload);
      state.urlList[index].playable = false;
    },
  },
});

export const { addUrl, deleteUrl, editUrl, changePlayable } = urlSlice.actions;
export default urlSlice.reducer;
export type { UrlType };

