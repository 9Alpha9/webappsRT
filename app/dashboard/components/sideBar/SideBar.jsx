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
import styles from "./styles.module.scss";
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
          label: "Surat Keterangan Bidang Usaha",
          path: "/dashboard/#",
        },
        {
          label: "Surat Keterangan Belum Menikah",
          path: "/dashboard/#",
        },
        {
          label: "Surat Keterangan Pindah Kependudukan",
          path: "/dashboard/#",
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
            className={`w-full flex items-center justify-between px-4 py-3 text-slate-100 hover:bg-dashboard-sidebar-hover cursor-pointer transition-all duration-300 ease-in-out  ${
              isActive ? "bg-dashboard-sidebar-active" : ""
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
            <div
              className={`${styles.dropDown} transition-all duration-300 ease-in-out p-3`}
            >
              {item.dropdownItems.map((dropdownItem, idx) => (
                <Link
                  key={idx}
                  href={dropdownItem.path}
                  className={`px-9.5 md:px-10 block py-3  my-3 text-slate-200 rounded-md hover:bg-dashboard-sidebar-hover transition-all duration-300 md:text-[.8rem] text-xs ${
                    pathname === dropdownItem.path
                      ? "bg-dashboard-sidebar-active/55 backdrop-blur-2xl"
                      : ""
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
        className={`flex items-center px-4 py-3 text-slate-100 hover:bg-dashboard-sidebar-hover my-3 transition-all duration-300 ease-in-out ${
          isActive ? "bg-dashboard-sidebar-active/55 backdrop-blur-2xl" : ""
        }`}
        onClick={isMobile ? toggleSidebar : undefined}
      >
        <Icon className="w-5 h-5" />
        {(!isCollapsed || isMobile) && (
          <span className="mx-3">{item.label}</span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`${
          styles.sidebarContainer
        } fixed inset-y-0 left-0 z-50 border-dashboard-border-primary border-r transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        } hidden md:block`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-3.5 border-b border-dashboard-border-primary">
            {!isCollapsed && (
              <span className="font-semibold text-white whitespace-nowrap md:text-xl text-xs">
                Admin Panel
              </span>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-dashboard-sidebar-hover text-white cursor-pointer transition-all duration-300 ease-in-out"
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
        className={`${
          styles.sidebarContainer
        } fixed text-white inset-y-0 left-0 z-50 w-[16rem] transform transition-transform duration-300 md:hidden md:text-md text-xs ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-dashboard-border-primary">
            <span className="md:text-xl text-lg font-semibold text-white">
              Admin Panel
            </span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-lg hover:bg-dashboard-sidebar-hover"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
          <nav
            className={`p-2 flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
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
