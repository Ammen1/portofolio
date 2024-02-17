import { useState } from "react";
import { content } from "../Content";
import { HiPhone } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer bg-slate-300  dark:white border-fuchsia-800  fixed rounded-s-full lg:top-72 right-6 md:top-10 md:right-10 lg:right-0 xl:right-0 border-t-2 border-b-2  hover:shadow-slate-50 shadow-slate-300  dark:bg-slate-900 p-2  "
        onClick={toggleMenu}
      >
        <HiPhone size={20} />
      </div>
      <nav
        className={`fixed z-[999] flex flex-col items-center gap-5 lg:px-10 px-6 py-14  backdrop-blur-md bg-gradient-to-tl bg-white/20 duration-300 ${
          showMenu ? "bottom-10" : "bottom-[100%]"
        } md:flex-row md:gap-10 md:py-0`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl p-3 rounded-full sm:cursor-pointer lg:text-3xl ${
              i === active && "text-white"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
