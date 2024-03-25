import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                        <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-base lg:text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-xl font-semibold"><NavLink className="text-[#131313CC] hover:text-[#23BE0A]" to="/">Home</NavLink></li>
                    <li className="text-xl font-semibold"><NavLink className="text-[#131313CC] hover:text-[#23BE0A]" to="/listed-books">Listed Books</NavLink></li>
                    <li className="text-xl font-semibold"><NavLink className="text-[#131313CC] hover:text-[#23BE0A]" to="/pages-to-read">Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="lg:px-7 cursor-pointer p-2 lg:py-4 rounded-lg bg-[#23BE0A] text-white lg:text-[18px] lg:font-semibold">Sign In</a>
                <a className="lg:px-7 cursor-pointer p-2 lg:py-4 rounded-lg bg-[#59C6D2] text-white lg:text-[18px] lg:font-semibold ml-1 lg:ml-4">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;