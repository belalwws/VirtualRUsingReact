import { navItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-101 py-3 backdrop-blur-lg  border-b border-neutral-700/80">
      <div className="container mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-10 w-10"
            />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex  space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-4">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden flex items-center justify-end pr-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden flex flex-col w-full justify-center items-center z-20 bg-neutral-900 pt-2 pb-8">
            <ul className="">
              {navItems.map((item, index) => {
                return (
                  <li className="py-5" key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center items-center space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href=""
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
