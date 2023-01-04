import { FaPlus } from 'react-icons/fa';
import React from "react";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { addUrl } from "../redux/slice/url";
import UrlWrapper from './urlWrapper';
import { UrlType } from '../redux/slice/url';

export default function Sidedrawer({ show, setShow }:{
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const dispatch = useAppDispatch();
  const urlList = useSelector((state: any) => state.url.urlList);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addUrl(event.currentTarget.new_url.value));
  }

  const urlMapper = urlList.map((url: UrlType) => {
    return(
      <UrlWrapper url={url.url} id={url.id} />
    )
  })  

  return (
    <div className={"fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "
    + (show ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-500 opacity-0 translate-x-full")}>
      <section className={" w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " + (show ? " translate-x-0 " : " translate-x-full ")} >
        <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-1 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg text-black">URL List</header>
          <ul className="w-full flex flex-col text-black px-5 py-4 space-y-4">
            {urlMapper}
            <li>
              <form onSubmit={handleSubmit}>
                <input id="new_url" type="text" placeholder='New URL'></input>
                <button type='submit' className='px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5'>Add</button>
              </form>
            </li>
          </ul>
        </div>
      </section>
      
      <section className=" w-screen h-full " onClick={() => {
        setShow(false);
      }}>

      </section>
    </div>
  )
}
