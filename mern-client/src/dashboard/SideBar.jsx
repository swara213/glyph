import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
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
import userImg from "../assets/profile.jpg";
import { AuthContext } from "../contects/AuthProvider";

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
            user?.displayName || "Demo User"
          }
        </p>
    
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
