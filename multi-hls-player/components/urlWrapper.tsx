export default function UrlWrapper({ url, urlList, setUrlList } : {
  url: string,
  urlList: string[],
  setUrlList: React.Dispatch<React.SetStateAction<string[]>>
}) {
  return (
    <div>
      <div className="flex">{url}</div>
      <button className= "px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
      onClick={() => {
        setUrlList(urlList => urlList.filter(item => item !== url));
      }}> Delete </button>
    </div>
  )
}