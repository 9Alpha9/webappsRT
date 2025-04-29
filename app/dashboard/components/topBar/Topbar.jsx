"use client";
import { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { logout } from "../../../globalFunction";

const Topbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-40 bg-dashboard-topbar border-b border-dashboard-border-primary/50 text-dashboard-topbar-text">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-600 md:hidden cursor-pointer"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="items-center gap-4 flex align-middle">
            <h1 className="text-xl font-semibold text-dashboard-primary">
              Dashboard
            </h1>
            <div className="flex-col hidden md:block">
              <span className="text-xs text-stone-500 block">
                Build Version
              </span>
              <span className="text-xs text-stone-500 block">0.0.1</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-dashboard-primary-color hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-dashboard-primary-color hover:text-white  cursor-pointer transition-all duration-300 ease-in-out"
            >
              <UserCircleIcon className="w-6 h-6" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 w-48 mt-2 bg-dashboard-topbar-profile rounded-lg shadow-lg">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-dashboard-topbar-profile-hover"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-dashboard-topbar-profile-hover"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    onClick={ logout }
                    className="block px-4 py-2 text-sm text-white hover:bg-dashboard-topbar-profile-hover"
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
