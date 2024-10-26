"use client";

import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  console.log(openMobileMenu);

  return (
    <header className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <h1 className="flex gap-0 font-extrabold text-2xl">
            <span className="text-gray-700">My</span>{" "}
            <span className="text-secondary">Home</span>
          </h1>
        </Link>

        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu((prev) => !prev)}
        />

        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="Tel:9344857457"
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephone />
            <span className="hidden md:block">+351 9344857457</span>
          </Link>
          <Link
            href="/login"
            className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
