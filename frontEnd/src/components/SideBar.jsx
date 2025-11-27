import { useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, Home, Image, LogOut, Scissors, SquarePen, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ setSideBar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  const navItems = [
    { to: '/ai', label: 'Dashboard', Icon: Home },
    { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
    { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
    { to: '/ai/community', label: 'Community', Icon: User },
  ];

  return (
    <div className="w-60 bg-white border-r border-gray-200 flex flex-col items-center">
      {/* User Info */}
      <div className="my-7 w-full text-center">
        <img src={user.imageUrl} alt="User" className="w-12 rounded-full mx-auto" />
        <h1 className="mt-1">{user.fullName}</h1>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col justify-center w-full">
        {/* eslint-disable-next-line no-unused-vars */}
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/ai'} // exact match for Dashboard
            onClick={() => setSideBar(false)}
            className={({ isActive }) =>
              `flex gap-2 p-2 items-center font-medium rounded-lg ${
                isActive ? 'bg-gradient-to-br from-blue-500 to-gray-500 text-white' : 'text-gray-700'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </div>

      {/* Footer with Profile and Sign Out */}
      <div className="w-full flex border-t border-gray-200 p-4 items-center justify-between mt-auto">
        <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
          <img src={user.imageUrl} alt="User" className="w-8 rounded-full" />
          <h1>{user.fullName}</h1>
        </div>
        <LogOut className="cursor-pointer" onClick={signOut} />
      </div>
    </div>
  );
};

export default SideBar;
