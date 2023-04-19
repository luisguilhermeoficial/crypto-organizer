import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
    return (
        <div className="bg-[url('../src/images/back3.jpg')] h-screen bg-cover">
            <h1 className="text-white text-center text-6xl font-bold py-7">CONTACT</h1>
            <div className="bg-white mx-5 text-center p-2 rounded">
                Hello, my name is Luis! This is a experimental project using React!
                <div className="flex justify-center">
                Check the source code on GitHub: <a href="https://github.com/luisguilhermeoficial/crypto-organizer"><FaGithub className="text-2xl" /></a>
                </div>
                <div className="flex justify-center">
                Check my profile on LinkedIn: <a href="https://www.linkedin.com/in/luis-dias-37586a271/"><FaLinkedin className="text-2xl" /></a>
                </div>
            </div>
        </div>
    )
}