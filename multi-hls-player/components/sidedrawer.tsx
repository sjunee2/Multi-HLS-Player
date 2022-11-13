export default function Sidedrawer({ children, show }:{
  children: React.ReactNode,
  show: boolean,
}) {
  return (
    <nav className={"fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out"
    + (show ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-500 opacity-0 translate-x-full")}>
      <ul className="w-full flex flex-col text-white px-5 py-4 space-y-4">
        {children}
      </ul>
      testdrawer
    </nav>
  )
}
