"use client"

import Link from 'next/link'
import { useUser, logOut } from '../auth/auth'

const Navbar = () => {
    const user = useUser();

    return(
        <div id="navbar" className="w-full border border-b-black z-50">
            <ul className="p-4 flex justify-end border-flex cursor-pointer">
                <li className="mx-4 text-black pb-1 border-transparent border-b-2  hover:border-black hover:duration-700 "><Link href="/">Home</Link></li>
                <li className="mx-4 text-black pb-1 border-transparent border-b-2  hover:border-black hover:duration-700 "><Link href="/" >Chat</Link></li>
                <li className="mx-4 text-black pb-1 border-transparent border-b-2  hover:border-black hover:duration-700 ">{!user? <Link href="/login">Login</Link> : <Link href="/">Chat</Link>}</li>
                <li className="mx-4 text-black pb-1 border-transparent border-b-2  hover:border-black hover:duration-700 ">{user? <Link href="/">Settings</Link> : <div></div>}</li>
                {user? <button onClick={logOut} className="text-black"> Sign Out </button> : null}
            </ul>
        </div>
    )
}

export default Navbar;