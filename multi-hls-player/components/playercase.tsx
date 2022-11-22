import dynamic from 'next/dynamic'
import { useState } from 'react'
import axios from 'axios'

const DynamicPlayer = dynamic(() => import('../components/player'), {
  ssr: false,
})

export default function Playercase( { url, key } : { url: string, key: number } ) {

  const [available, setAvailable] = useState<Boolean>(false);

  async function urlChecker(){
    try{
      const response = await axios.get(url);
      if (response.status == 200) {
        setAvailable(true);
      }
      else {
        setAvailable(false);
      }
    } catch (error) {
      setAvailable(false);
    };
  }

  urlChecker();

  const playHandler = function(){
    if (!available) {
      return ("hidden");
    }
    else {
      return ("");
    }
  }

  return (
    <div className={playHandler()}>
      <DynamicPlayer url={url} key={key} />
      <div>{available.toString()}, {url}</div>
    </div>
  )

}