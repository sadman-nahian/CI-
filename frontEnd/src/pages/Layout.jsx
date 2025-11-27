import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import SideBar from "../components/SideBar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSideBar] = useState(false);
  const {user}=useUser();
  const toggle = () => {
    setSideBar(!sidebar);
  };
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen p-2">
      <nav>
        <div
  onClick={() => navigate("/")}
  className="cursor-pointer select-none text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-primary m-5"
>
  BotBrain AI
</div>

        {sidebar ? (
          <X className="w-6 h-6 text-gray-600 sm:hidden" onClick={toggle} />
        ) : (
          <Menu className="w-6 h-6 text-gray-600 sm:hidden" onClick={toggle} />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <SideBar sidebar={sidebar} setSideBar={setSideBar} />
        <div className="flex-1 bg-[#F4F7B]">
            <Outlet />

        </div>

      </div>
      
    </div>
  ):(
    <div>
        <SignIn/>
    </div>
  );
};

export default Layout;
