import { NavLink, Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";


function Navbar() {

  function getThemeFromLocalStorage(){
    return localStorage.getItem('theme') || 'light'
  }
  const [theme, setTheme]=  useState(getThemeFromLocalStorage)

  useEffect(()=>{
    localStorage.setItem('theme', theme);
    const localtheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localtheme)
  }, [theme])

  const handleChange = (e)=>{
    if(e.target.checked){
      setTheme('light')
    }
    else(
      setTheme('dark')
    )
  }

  const { user } = useGlobalContext();
  const { logout, isPending } = useLogout();
  return (
    <header className="bg-base-200">
      <div className="bg-neutral py-2 text-neutral-content">
        <div className="max-container">
          <div className="align-element flex justify-center sm:justify-end">
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p className="text-xs sm:text-sm">Welcome, {user.displayName}</p>
              <button onClick={logout} className="btn btn-sm btn-outline btn-primary">
                Logout <MdLogout  className="text-xl text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-container">
        <nav className="flex items-center justify-between py-5">
          <NavLink
            className="hidden lg:flex btn btn-primary text-3xl items-center active"
            to="/"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <NavLink className="capitalize active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="capitalize" to="/cart">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <Link className="btn btn-neutral" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost" to="/about">
              About
            </Link>
            <Link className="btn btn-ghost" to="/products">
              Products
            </Link>
            <Link className="btn btn-ghost" to="/cart">
              Cart
            </Link>
          </div>
          <div className="flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={handleChange}
                checked={theme === 'dark' ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <NavLink
              to="/cart"
              className="relative btn btn-ghost btn-circle btn-md"
            >
              <div className="indicator">
                <span className="badge badge-sm badge-primary indicator-item">
                  0
                </span>
                <BsCart3 className="text-2xl" />
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
