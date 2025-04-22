"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, toggleSidebar, isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const [isPengajuanOpen, setIsPengajuanOpen] = useState(false);

  const menuItems = [
    { icon: HomeIcon, label: "Dashboard", path: "/dashboard" },
    { icon: UsersIcon, label: "Data Warga RT", path: "/dashboard/user-data" },
    {
      icon: DocumentTextIcon,
      label: "Pengajuan",
      path: "/dashboard/requests",
      hasDropdown: true,
      dropdownItems: [
        { label: "Surat Kematian", path: "/dashboard/requests/surat-kematian" },
        {
          label: "Surat Keterangan KM",
          path: "/dashboard/requests/surat-keterangan-kurang-mampu",
        },
      ],
    },
    {
      icon: ChatBubbleLeftIcon,
      label: "Feedback",
      path: "/dashboard/feedback",
    },
  ];

  const renderMenuItem = (item, index, isMobile = false) => {
    const Icon = item.icon;
    const isActive =
      pathname === item.path ||
      (item.hasDropdown &&
        item.dropdownItems.some(
          (dropdownItem) => pathname === dropdownItem.path
        ));

    if (item.hasDropdown) {
      return (
        <div key={index}>
          <button
            onClick={() => setIsPengajuanOpen(!isPengajuanOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer ${
              isActive ? "bg-gray-100" : ""
            }`}
          >
            <div className="flex items-center">
              <Icon className="w-5 h-5" />
              {(!isCollapsed || isMobile) && (
                <span className="ml-3">{item.label}</span>
              )}
            </div>
            {(!isCollapsed || isMobile) && (
              <ChevronDownIcon
                className={`w-4 h-4 transition-all duration-300  ${
                  isPengajuanOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {isPengajuanOpen && (!isCollapsed || isMobile) && (
            <div className="ml-6">
              {item.dropdownItems.map((dropdownItem, idx) => (
                <Link
                  key={idx}
                  href={dropdownItem.path}
                  className={`block px-4 py-2 my-3  text-sm text-gray-600 hover:bg-gray-100 transition-all duration-300 ${
                    pathname === dropdownItem.path ? "bg-gray-100" : ""
                  }`}
                  onClick={isMobile ? toggleSidebar : undefined}
                >
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={index}
        href={item.path}
        className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 my-3 ${
          isActive ? "bg-gray-100" : ""
        }`}
        onClick={isMobile ? toggleSidebar : undefined}
      >
        <Icon className="w-5 h-5" />
        {(!isCollapsed || isMobile) && (
          <span className="ml-3">{item.label}</span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        } hidden md:block`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {!isCollapsed && (
              <span className="text-xl font-semibold text-black">
                Admin Panel
              </span>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-lg hover:bg-gray-100 text-black cursor-pointer"
            >
              {isCollapsed ? (
                <ChevronRightIcon className="w-5 h-5" />
              ) : (
                <ChevronLeftIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          {/* <span
            className={`text-sm font-medium text-gray-500 py-3 uppercase flex flex-row  ${
              isOpen ? "py-4" : "px-6"
            }`}
          >
            Menu
          </span> */}
          <nav className="flex-1 overflow-y-auto mt-6">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed text-black inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-semibold text-black">
              Admin Panel
            </span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-lg hover:bg-gray-100"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            {menuItems.map((item, index) => renderMenuItem(item, index, true))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
