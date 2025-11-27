import React from "react";
// import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="fixed z-5 w-full  backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
     <div
  onClick={() => navigate("/")}
  className="cursor-pointer select-none text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-primary"
>
  BotBrain AI
</div>


      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 text-white bg-primary cursor-pointer px-10 py-2.5 rounded-full"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
