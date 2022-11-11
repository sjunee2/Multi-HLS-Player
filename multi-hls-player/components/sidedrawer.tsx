export default function Sidedrawer({ show }:{
  show: boolean,
}) {
  return (
    <>
      {show && (
        <h1 className='text-sky-400'>
          testdrawer
        </h1>
      )
      }
    </>
  )
}
