import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { MdApartment } from "react-icons/md";

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
        className="sm:cursor-pointer fixed rounded-s-full lg:top-56 right-6 md:top-10 md:right-10 lg:right-14 xl:right-0 z-[999] border-4 dark:bg-slate-900 p-2 bg-white/100 shadow-4xl hover:animate-none"
        onClick={toggleMenu}
      >
        <HiMenuAlt2 size={30} />
      </div>
      <nav
        className={`fixed z-[999] flex flex-col items-center gap-5 px-6 py-3 backdrop-blur-md bg-gradient-to-tl bg-slate-300/60 duration-300 ${
          showMenu ? "bottom-10" : "bottom-[100%]"
        } md:flex-row md:gap-10 md:py-0`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
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
