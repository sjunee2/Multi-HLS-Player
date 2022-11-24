import dynamic from 'next/dynamic'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const DynamicPlayer = dynamic(() => import('../components/player'), {
  ssr: false,
})

export default function PlayerWrapper( { url, key } : { url: string, key: number } ) {

  const [available, setAvailable] = useState<Boolean>(false);

  useEffect(() => {
    urlChecker();
  }, [])

  async function urlChecker(){
    try{
      const response = await axios.get(url);
      console.log(response)
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

  return (
    <>
      {available &&
      <div>
        <DynamicPlayer url={url} key={key} />
        <div>{available.toString()}, {url}</div>
      </div>
      }
    </>
    
  )

}