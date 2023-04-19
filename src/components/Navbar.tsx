import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import matic from "../images/matic.png";

export const Navbar = () => {
    const [openUl, setOpenUl] = useState(false);

    return (
        <div className="bg-[url('./images/back1.jpg')] items-center w-screen h-20 flex text-white">
            <img src={matic} alt="logo" className="w-20 h-20 p-2" />
            <h1 className="text-3xl font-mono md:text-4xl lg:text-5xl ml-4">CRYPTO ORGANIZER</h1>
            <div className="ml-auto p-5">
                <button onClick={() => setOpenUl(!openUl)}><FaBars className="text-3xl block md:hidden" /></button>
                {openUl ? (
                <div className="bg-[url('./images/back2.jpg')] absolute left-0 top-0 h-full w-full">
            <h1 className="text-center p-5 text-2xl font-mono">MENU</h1>
            <ul className="list-none text-center">
            <li className="p-7"><Link to="/" className="px-5 text-white p-5 font-stela text-xl" onClick={() => setOpenUl(!openUl)}>HOME</Link></li>
            <li className="p-7"><Link to="/market" className="px-5 text-white font-stela text-xl" onClick={() => setOpenUl(!openUl)}>MARKET</Link></li>
            <li className="p-7"><Link to="/about-us" className="px-5 text-white p-5 font-stela text-xl" onClick={() => setOpenUl(!openUl)}>ABOUT US</Link></li>
            <li className="p-7"><Link to="/contact" className="px-5 text-white p-5 text-right font-stela text-xl" onClick={() => setOpenUl(!openUl)}>CONTACT</Link></li>
            </ul>
            </div>
            ) : (
                openUl
            )
            }
                <ul className="text-white font-stela text-xl mb-6 list-none hidden md:flex">
                        <li className="px-5"><Link to="/">HOME</Link></li>
                        <li className="px-5"><Link to="/market">MARKET</Link></li>
                        <li className="px-5"><Link to="/about-us">ABOUT US</Link></li>
                        <li className="px-5"><Link to="/contact">CONTACT</Link></li>
                    </ul>
            </div>
        </div>
    )
}