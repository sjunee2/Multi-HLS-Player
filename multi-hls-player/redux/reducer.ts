import url from "./slice/url";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ url });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;