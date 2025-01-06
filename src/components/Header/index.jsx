import { clearToken, getToken, getUser } from "@/token"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./avatar.css"
import Avatar from "../Avatar"
const Header = () => {
    const size = 26
    const [user, setUser] = useState(null)
    const [tab, setTab] = useState(0)
    const [dropped, setDropped] = useState(false)
    useEffect(() => {
        setUser(getUser())
    }, [])

    function clickDrop() {
        setDropped(!dropped)
    }

    function signOut() {
        clearToken()
        console.log('cleared')
    }

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-6">
                <Link to="/" className="text-4xl md:text-2xl font-medium text-slate-800">Me Game<span className="text-sm italic"> by bug1422</span></Link>
                <div className="">
                    <div className="w-[400px] md:w-[100px] h-[30px] rounded-md bg-sky-500"></div>
                </div>
            </div>
            <div className=" flex flex-row justify-end text-2xl md:text-xl divide-x-2">
                <Link to="/Games" className="hover:text-sky-500 px-4 font-semibold">Games</Link>
                <Link to="/About" className="hover:text-sky-500 px-4 font-semibold">About</Link>
                {
                    user != null ?
                        <div className="cursor-pointer px-4" onClick={() => clickDrop()}>
                            <Avatar width={size} height={size} />
                        </div> :
                        <>
                            <Link to="/Login" className="hover:text-sky-500 px-4 font-semibold">Login</Link>
                            <Link to="/Register" className="hover:text-sky-500 px-4 font-semibold">Register</Link>
                        </>
                }
            </div>
            <div id="profileDropdown" className={`w-64 h-64 z-20 absolute ${dropped ? "" : "hidden"} overflow-hidden right-0 translate-y-[40px] border border-slate-600  bg-sky-100 dark:bg-slate-100 me-6`}>
                <ul className="" aria-labelledby="dropdownToggle">
                    <div id="" className={`transition ease-in-out w-full ${tab == 0 ? 'moveToRight1' : 'moveToLeft1'}`}>
                        <li className="py-2 ps-3 pt-3 border-b-2">
                            <span className="flex">
                                <Avatar width={size} height={size} />
                                <div className="ms-1">{user?.nickname}</div>
                            </span>
                        </li>
                        <li className="py-2 ps-3 cursor-pointer">
                            Chatting
                        </li>
                        <li className="py-2 ps-3 cursor-pointer">
                            <div onClick={() => setTab(1)}>Change Mode</div>
                        </li>
                        <li className="py-2 ps-3 cursor-pointer" onClick={() => signOut()}>
                            Logout
                        </li>
                    </div>
                    <div id="" className={`transition ease-in-out ${tab == 1 ? 'moveToLeft2' : 'hidden'}`}>
                        <li className="py-2 ps-3 pt-3 border-b-2 cursor-pointer">
                            <div onClick={() => setTab(0)}>Back</div>
                        </li>
                    </div>
                </ul>
            </div>
            <div className={`w-[99vw] h-[100vh] absolute left-0 top-0 z-19 ${dropped ? "" : "hidden"}`} onClick={() => clickDrop()}></div>
        </div>
    )
}

export default Header