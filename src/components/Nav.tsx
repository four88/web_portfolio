import MenuIcon from "../assets/menu.png";
import { useState } from "react";

export const Nav = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <header>
      {menuOpened ? (
        <section className="flex flex-col w-full">
          <ul className="flex flex-col gap-4 w-full font-clover py-4 border-b-2">
            <li className="w-full flex items-center justify-center py-2">
              <a href="#about">ABOUT</a>
            </li>

            <li className="w-full flex items-center justify-center py-2">
              <a href="#project">PROJECT</a>
            </li>

            <li className="w-full flex items-center justify-center py-2">
              <a href="#contact">CONTACT ME</a>
            </li>
          </ul>
        </section>
      ) : (
        ""
      )}
      <nav className="flex flex-row justify-between items-center border-b-2 pb-6 pt-6 w-full">
        <h1 className="font-krick font-bold text-[48px] text-white tracking-wide">
          PHARANYU
        </h1>
        <ul className="flex flex-row font-clover justify-evenly gap-12 text-lg max-md:gap-6 max-md:text-sm max-sm:hidden">
          <li className=" hover:text-accent">
            <a href="#about">ABOUT</a>
          </li>

          <li className=" hover:text-accent">
            <a href="#project">PROJECT</a>
          </li>

          <li className=" hover:text-accent">
            <a href="#contact">CONTACT ME</a>
          </li>
        </ul>

        <button
          className="hidden w-12 h-12 max-sm:flex max-sm:justify-center"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img src={MenuIcon} alt="icon" className="w-full h-full" />
        </button>
      </nav>
    </header>
  );
};
