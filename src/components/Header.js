import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex justify-end p-3 pr-5 text-sm items-center space-x-4 font-mono">
      <Link
        href={`https://mail.google.com`}
        className="text-white hover:underline"
      >
        Gmail
      </Link>
      <Link
        href={`https://image.google.com`}
        className="text-white hover:underline"
      >
        Images
      </Link>
      <TbGridDots className="text-white hover:bg-gray-400 rounded-full text-4xl p-2" />
      <button className="bg-transparent font-mono text-white px-6 py-2 font-bold rounded-md hover:bg-gray-400">
        Sign In
      </button>
    </div>
  );
};

export default Header;
