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
    { icon: HomeIcon, text: "Home", href: "/as" },
    { icon: User, text: "profile", href: "/profile" },
  ];
  return (
    <nav className=" px-4 pt-3   h-screen w-64 bg-gray-800 overflow-auto items flex flex-col  gap-4 text-white ">
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
