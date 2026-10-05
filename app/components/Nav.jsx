import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="logo">
          <Link href="/">
            <img
              className="h-20 w-auto"
              src="https://react-4-nba-players.vercel.app/assets/nba-logo-9ce6ab70.png"
              alt="NBA"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Link className="hover:text-blue-700" href="/topplayers">
            Top Players
          </Link>
          <Link className="hover:text-blue-700" href="/teams">
            Teams
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
