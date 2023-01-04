import React from "react";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { deleteUrl, editUrl } from "../redux/slice/url";
import store from "../redux/store";
import { RootState } from "../redux/reducer";

export default function UrlWrapper({ url, key } : {
  url: string,
  key: number,
}) {
  const dispatch = useAppDispatch();

  return (
    <li>
      <div className="flex">{url}</div>
      <button className= "px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
      onClick={() => {
        dispatch(deleteUrl(key));
      }}> Delete </button>
    </li>
  )
}