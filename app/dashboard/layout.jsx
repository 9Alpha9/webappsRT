"use client";
import { useState } from "react";
import Sidebar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/Topbar";
import { MetaData } from "./components/meta/DbMetaData";
import GoogleAnalytics from "../GoogleAnalytics";
export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <title>Welcome To Dashboard</title>
      <meta name="description" content={MetaData.description} />
      <meta name="keywords" content={MetaData.keywords.join(", ")} />
      <meta name="author" content={MetaData.authors[0].name} />
      <meta property="og:title" content={MetaData.openGraph.title} />
      <meta
        property="og:description"
        content={MetaData.openGraph.description}
      />
      <div className="min-h-screen bg-gray-50 text-black">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <div
          className={`transition-all duration-300 ${
            isCollapsed ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <Topbar toggleSidebar={toggleSidebar} />
          <main className="p-6">
            <GoogleAnalytics />
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
