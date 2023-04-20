import bitcoin from "../images/bitcoin.png";
import steth from "../images/steth.png";
import usd from "../images/usd.png";
import dogecoin from "../images/dogecoin.png";
import bnb from "../images/bnb.png";

import { Bitcoin } from "../components/Bitcoin";
import { Steth } from "../components/Steth";
import { USD } from "./USD";
import { Doge } from "../components/Doge";
import { BNB } from "../components/BNB";

export const Home = () => {
    return (
        <div className="bg-[url('../src/images/back3.jpg')] bg-cover md:h-screen">
            <h1 className="text-white text-center text-5xl md:text-6xl font-bold py-7">TRACK REAL TIME <br className="hidden md:block" /> CRYPTOCURRENCY!</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 text-white text-center font-stela text-2xl">
                <div className="bg-gradient-to-r from-purple-700 to-blue-300  rounded-full w-80 text-center m-auto flex md:block md:w-44 lg:w-56 md:h-72 md:p-7 justify-between my-2">
                    <img src={bitcoin} alt="bitcoin" className="w-40 h-40" />
                    <div className="m-auto">
                        <Bitcoin />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-blue-300  rounded-full w-80 text-center m-auto flex md:block md:w-44 lg:w-56 md:h-72 md:p-7 justify-between my-2">
                    <img src={steth} alt="steth" className="w-40 h-40" />
                    <div className="m-auto">
                        <Steth />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-blue-300  rounded-full w-80 text-center m-auto flex md:block md:w-44 lg:w-56 md:h-72 md:p-7 justify-between my-2">
                    <img src={usd} alt="usd" className="w-40 h-40" />
                    <div className="m-auto">
                        <USD />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-blue-300  rounded-full w-80 text-center m-auto flex md:block md:w-44 lg:w-56 md:h-72 md:p-7 justify-between my-2">
                    <img src={dogecoin} alt="dogecoin" className="w-40 h-40" />
                    <div className="m-auto">
                        <Doge />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-blue-300  rounded-full w-80 text-center m-auto flex md:block md:w-44 lg:w-56 md:h-72 md:p-7 justify-between my-2">
                    <img src={bnb} alt="bnb" className="w-40 h-40" />
                    <div className="m-auto">
                        <BNB />
                    </div>
                </div>
            </div>
        </div>
    )
}