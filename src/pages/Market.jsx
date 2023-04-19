import { useState, useEffect } from "react";
import axios from "axios";

export const Market = () => {
const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=false&locale=en')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-[url('../src/images/back3.jpg')] h-screen bg-cover w-screen">
            <h1 className="text-white text-center text-5xl md:text-6xl font-bold py-7">MARKET UPDATE</h1>
            <div className="bg-black text-white grid grid-cols-3 md:grid-cols-5 border-white text-2xl font-bold text-center bg-bottom p-3 rounded border-y-2">
                <p className="hidden md:block">LOGO</p>
                <p>NAME</p>
                <p>PRICE</p>
                <p>24H CHANGE</p>
                <p className="hidden md:block">MARKET CAP</p>
            </div>
            {data.map(item => (
                <div key={item.id} className="grid grid-cols-3 md:grid-cols-5 border-b-2 border-white bg-[url('./images/back1.jpg')] bg-bottom p-3 rounded text-white text-2xl font-bold text-center">
                    <p className="hidden md:flex justify-center">
                        <img src={item.image} alt={item.id} className="h-14 w-14" />
                    </p>
                    <p>{item.name}({item.symbol})</p>
                    <p>${item.current_price.toFixed(2)}</p>
                    {item.price_change_percentage_24h > 0 ? (
                    <p className="text-green-500">{item.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                    <p className="text-red-500">{item.price_change_percentage_24h.toFixed(2)}%</p>
                    )
                }
                    <p className="hidden md:block">$ {item.market_cap.toLocaleString()}</p>
                </div>
            )
            )}
        </div>
    )
}