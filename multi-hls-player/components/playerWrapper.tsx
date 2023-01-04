import dynamic from 'next/dynamic'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { changePlayable } from '../redux/actions'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'

const DynamicPlayer = dynamic(() => import('../components/player'), {
  ssr: false,
})

export default function PlayerWrapper( { url, id } : { url: string, id: number } ) {

  const dispatch = useAppDispatch();

  const playable = useSelector((state: RootState) => state.url.urlList.filter((url) => url.id === id)[0].playable);

  useEffect(() => {
    urlChecker();
  }, [])

  async function urlChecker(){
    try{
      const response = await axios.head(url);
      if (response.status === 200) {
        null;
      } else {
        dispatch(changePlayable(id));
      }
    } catch (error) {
      dispatch(changePlayable(id));
    };
  }


  return (
    <>
      {playable &&
      <div className='inline-block'>
        <DynamicPlayer url={url} />
      </div>
      }
    </>
    
  )

}