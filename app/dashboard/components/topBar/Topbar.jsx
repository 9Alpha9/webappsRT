"use client";
import { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Topbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-40 bg-slate-800 border-b border-slate-600 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-600 md:hidden cursor-pointer"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-slate-600 transition-all duration-300 ease-in-out">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-600 cursor-pointer transition-all duration-300 ease-in-out"
            >
              <UserCircleIcon className="w-6 h-6" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 w-48 mt-2 bg-slate-600 rounded-lg shadow-lg">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
