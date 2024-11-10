import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../../assets/avatar.png"; 
import AuthContext from "../../context/AuthContext";


const SideBar = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  return (
    <Sidebar
      className=" bg-[#D6C1A1]"
      style={{ backgroundColor: '#D6C1A1' }}
      aria-label="Sidebar with logo branding example"
    >
      <Sidebar.Logo
        href="/"
        img={user?.photoURL}
        
        // className= 'w-12 h-12'
        // style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        // imgAlt="Flowbite logo"
      
      >
        <p>
          {
            user?.displayName || "ADMIN"
          }
        </p>
    
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item
            href="/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
         
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
