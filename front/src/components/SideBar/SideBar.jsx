import React from "react";
import SideBarButton from "../SideBarButton";
import {
  HomeIcon,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const user = useSelector((state) => state.auth.user);

  const menuItems = [
    { icon: HomeIcon, text: "Home", href: "/" },
    { icon: Search, text: "search", href: "/search" },
    { icon: Bell, text: "notifications", href: "/notifications" },
    { icon: Mail, text: "Messages", href: "/Messages" },
    { icon: Bookmark, text: "Bookmarks", href: "/Bookmark" },
    { icon: HomeIcon, text: "settings", href: "/settings" },
    { icon: User, text: "profile", href: `/profile/${user.id}` },
  ];
  return (
    <nav className="fixed top-0  px-4 pt-3 h-full w-64 bg-gray-800 overflow-hidden flex flex-col gap-4 text-white">

      {menuItems.map((e, i) => {
        const Icon = e.icon;
        return (
          <NavLink
            key={i}
            to={e.href}
            className={({ isActive }) => (isActive ? "bg-red-600" : "")}
          >
            {" "}
            <span className=" inline-flex gap-5">
              <Icon /> {e.text}
            </span>{" "}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SideBar;
