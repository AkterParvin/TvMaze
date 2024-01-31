import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
    const navLinks = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/allservices">Services</Link></li>
    </>
    // change nav color when scrolling 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= window.innerHeight * 0.6) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        // Cleaning the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    return (
        <div className={`${color ? "bg-teal-100 transform duration-1000 " : "bg-white transform duration-1000  "
            } sticky top-0 z-30 border-gray-200 dark:bg-gray-900 h-[80px] transition-all duration-300 navbar  ease-in-out`}>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-48">

                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <span>
                            <img src="/logo.png" alt="" className="w-10 " />
                        </span> TV MAZE</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                        {navLinks}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Nav;