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
  CalendarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, toggleSidebar, isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const [isPengajuanOpen, setIsPengajuanOpen] = useState(false);

  const menuItems = [
    { icon: HomeIcon, label: "Dashboard", path: "/dashboard" },
    { icon: UsersIcon, label: "Data Warga RT", path: "/dashboard/user-data" },
    { icon: CalendarIcon, label: "Agenda Kegiatan", path: "/dashboard/#" },

    {
      icon: DocumentTextIcon,
      label: "Pengajuan Surat",
      path: "/dashboard/requests",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Surat Keterangan Kematian",
          path: "/dashboard/requests/surat-kematian",
        },
        {
          label: "Surat Keterangan Kurang Mampu",
          path: "/dashboard/requests/surat-keterangan-kurang-mampu",
        },
        {
          label: "Surat Keterangan Usaha",
          path: "/dashboard/requests/#",
        },
        {
          label: "Surat Keterangan Belum Menikah",
          path: "/dashboard/requests/#",
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
            className={`w-full flex items-center justify-between px-4 py-3 text-slate-100 hover:bg-slate-700 cursor-pointer transition-all duration-300 ease-in-out  ${
              isActive ? "bg-slate-700" : ""
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
            <div className="transition-all duration-300 ease-in-out p-3 ">
              {item.dropdownItems.map((dropdownItem, idx) => (
                <Link
                  key={idx}
                  href={dropdownItem.path}
                  className={`px-10 block py-2 my-3  text-sm text-slate-200 rounded-lg hover:bg-slate-600 transition-all duration-300 ${
                    pathname === dropdownItem.path ? "bg-slate-600" : ""
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
        className={`flex items-center px-4 py-3 text-slate-100 hover:bg-slate-700 my-3 transition-all duration-300 ease-in-out ${
          isActive ? "bg-slate-700" : ""
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
        className={`fixed inset-y-0 left-0 z-50 bg-slate-800 border-slate-600 border-r transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        } hidden md:block`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-3.5 border-b border-slate-600">
            {!isCollapsed && (
              <span className="text-xl font-semibold text-white whitespace-nowrap">
                Admin Panel
              </span>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-slate-600 text-white cursor-pointer transition-all duration-300 ease-in-out"
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
            className={`text-sm font-medium text-gray-500 py-3 uppercase flex flex-row mt-8 ${
              isOpen ? "px-2" : "px-2.5"
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
        className={`fixed inset-0 z-50 bg-black transition-opacity md:hidden
    ${
      isOpen
        ? "opacity-50 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed text-white inset-y-0 left-0 z-50 max-w-64 bg-slate-800 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-slate-600">
            <span className="text-xl font-semibold text-white">
              Admin Panel
            </span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-lg hover:bg-slate-600"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
          <nav
            className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
              isOpen ? "h-full" : "max-h-0"
            }`}
          >
            {menuItems.map((item, index) => renderMenuItem(item, index, true))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
