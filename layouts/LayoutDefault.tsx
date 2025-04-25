import "./style.css";

import "./tailwind.css";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={"flex flex-col m-auto min-h-screen"}>
      <header className="flex justify-between p-4 border-b-2 border-gray-200">
        <div className="flex items-center">
          <Button
            onClick={toggleSidebar}
            className="bg-blue-500 hover:bg-blue-700"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex items-center">
          <h1 className={"font-bold text-xl"}>Ticket Management System</h1>
        </div>
        <Link href="/auth" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </Link>
      </header>
      <div className={"flex flex-1"}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
          <Logo />
          <Link href="/">Welcome</Link>
          <Link href="/todo">Todo</Link>
          <Link href="/star-wars">Data Fetching</Link>
          <Link href="/auth">Login / Register</Link>
        </Sidebar>
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Sidebar({
  children,
  isOpen,
  toggleSidebar,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        id="sidebar"
        className={`
          p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200 max-w-[200px] 
          fixed lg:relative z-20 bg-white h-full transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:hidden"} 
        `}
      >
        <div className="flex justify-end lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="w-full">
      <div id="page-content" className={"flex p-5 min-h-screen w-full"}>
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
