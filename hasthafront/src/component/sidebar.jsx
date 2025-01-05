import React from "react";
import image1 from "../images/hlogo1.png";
import {
  UserRound,
  LogOut,
  Info,
  Accessibility,
  List,
  FolderOpen,
  SlidersHorizontal,
  Home,
  Menu,
  X,
  School,
  Building,
  Church,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
        isSidebarOpen ? "block" : "hidden"
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative z-20`}
    >
      <div className="p-6 border-b">
      <img src={image1} alt="logo" className="h-10" />
      </div>

      {/* Scrollable Sidebar Content */}
      <nav className="mt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 99px)' }}>
        <ul>
          <Link to='/dashboard'>
            <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
              <Home size={14} className="mr-2" />
              Home
            </li>
          </Link>
        </ul>
        <ul>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Residential</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <List size={14} className="mr-2" />
            Residential Form
          </li>
          <Link to='/resdetails'>
            <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
              <FolderOpen size={14} className="mr-2" />
              Residential Details
            </li>
          </Link>
          <Link to='/resfilter'>
            <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
              <SlidersHorizontal size={14} className="mr-2" />
              Residential Filter
            </li>
          </Link>
          
        </ul>
        <ul>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Non Residential</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <List size={14} className="mr-2" />
            Non Residential Form
          </li>
        </ul>
        <ul>
          <Link to='/comdetails'>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Comercial</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <FolderOpen size={14} className="mr-2" />
            Comercial Details
          </li>
          </Link>
          <Link to = '/comfilter'>
            <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
              <SlidersHorizontal size={14} className="mr-2" />
              Comercial Filter
            </li>
          </Link>
        </ul>
        <ul>
          <Link to='/hosdetails'>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Hospitals</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <Accessibility size={14} className="mr-2" />
            Hospital Details
          </li>
          </Link>
        </ul>
        <ul>
          <Link to='/edudetails'>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Educational institutions</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <School size={14} className="mr-2" />
            Educational Details
          </li>
          </Link>
        </ul>
        <ul>
          <Link to='/inddetails'>
            <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Industrial</li>
            <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
              <Building size={14} className="mr-2" />
              Industrial Details
            </li>
          </Link>
        </ul>
        <ul>
          <Link to='/comdetails'>
            <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Religious</li>
            <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
              <Church size={14} className="mr-2" />
              Religious Details
          </li>
          </Link>
        </ul>
        <ul>
          <Link to='/dashboard'>
          <li className="p-4 pl-5 font-semibold uppercase bg-gray-100">Additional Info</li>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <Info size={14} className="mr-2" />
            About
          </li>
          </Link>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <UserRound size={14} className="mr-2" />
            Support Team
          </li>
          <Link to='/'>
          <li className="p-4 hover:bg-gray-200 hover:text-orange-600 cursor-pointer flex items-center">
            <LogOut size={14} className="mr-2" />
            Log Out
          </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
