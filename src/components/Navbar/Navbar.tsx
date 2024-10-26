import { useEffect, useState } from "react";
import { dataHeader } from "../Header/Header.data";
import { NavbarProps } from "./Navbar.types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const animationNavbar = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

export function Navbar(props: NavbarProps) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolling(scrollY >= window.innerHeight - 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.nav
          key="navbar"
          variants={animationNavbar}
          initial="hidden"
          animate="animate"
          exit="exit"
          className="fixed z-[9999]  right-0 left-0 px-3 md:px-6 py-3 text-white bg-gray-400/40 justify-self-center top-10 rounded-3xl backdrop-blur w-fit"
        >
          <div className="flex items-center gap-3  md:gap-3 md:flex-row">
            {dataHeader.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="text-xs md:text-base hover:text-secondary hover:border-b-[1px] hover:border-secondary"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-xs md:text-base px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
            >
              Login
            </Link>
          </div>
        </motion.nav>
      ) : (
        <div className="items-center hidden gap-5 md:flex">
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="hover:text-secondary hover:border-b-[1px] hover:border-secondary"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
      {openMobileMenu && (
        <div className="absolute z-[1] left-0 top-20 bg-white right-0 w-full px-4 py-4">
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="block hover:text-secondary hover:border-b-[1px]"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
