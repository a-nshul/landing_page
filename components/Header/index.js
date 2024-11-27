import React from "react";
import Image from "next/image";
import logo from "../../public/asset/logo.jpeg";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center space-x-2 animate-slide-in"
          style={{ transform: "translateX(120px)" }} 
        >
          <Image
            src={logo.src}
            alt="Company Logo"
            width={120}
            height={100}
            className="rounded-md hover:scale-110 transition-transform duration-300 ease-in-out"
            priority
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
