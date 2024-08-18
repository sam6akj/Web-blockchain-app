import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo3.png";

const NavBarItem = ({ title, path }) => (
  <li className="mx-7 cursor-pointer">
    <Link to={path}>{title}</Link>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
<nav className="w-full flex justify-between items-center gradient-bg-welcome px-16">
  <div className="flex-initial">
    <a href="/">
      <img src={logo} alt="logo" className="w-40 cursor-pointer" />
    </a>
  </div>
  <ul className="text-white text-lg md:flex hidden list-none flex-row justify-end items-center flex-auto">
    {[
      { title: 'Market', path: 'https://coinmarketcap.com/' },
      { title: 'Exchange' },
      { title: 'Team', path: '/team' },
      { title: 'Wallets' },
    ].map((item, index) => (
      <NavBarItem key={item.title + index} title={item.title} path={item.path} />
    ))}
    <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
      Login
    </li>
  </ul>
  <div className="flex relative">
    {!toggleMenu && (
      <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
    )}
    {toggleMenu && (
      <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
    )}
    {toggleMenu && (
      <ul
        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
      >
        <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
        {[
          { title: 'Market', path: 'https://coinmarketcap.com/' },
          { title: 'Exchange' },
          { title: 'Team', path: '/team' },
          { title: 'Wallets' },
        ].map((item, index) => (
          <NavBarItem key={item.title + index} title={item.title} path={item.path} />
        ))}
      </ul>
    )}
  </div>
</nav>

  );
};

export default Navbar;
