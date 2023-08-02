import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./navigation-sidebar.css";


const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];

 const linkIcons = {
    home: faHome,
    explore: faHashtag,
    notifications: faBell,
    messages: faEnvelope,
    bookmarks: faBookmark,
    lists: faList,
    profile: faUser,
    more: faEllipsisH,
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 925);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 925);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link}
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={linkIcons[link]} className="me-2" />
          {!isSmallScreen && link}
        </Link>
      ))}
    </div>
  );
};
export default NavigationSidebar;