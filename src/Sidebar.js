import React from 'react';
import { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';



const Sidebar = () => {
  const [mystyle, setmystyle] = useState("backgroundColor:green");
  const onMau = () =>{
      console.log("jello");
      setmystyle("backgroundColor:brown");
  }
  return (
    <div style={{mystyle }} >
      <CDBSidebar textColor="blue" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="https://www.leetcode.com" className="text-decoration-none" style={{ mystyle }} onMouseEnter={onMau}>
            Lean<strong>Prep</strong>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent color="black" className="sidebar-content">
          <CDBSidebarMenu textColor="black">
            <Link exact to="/" activeClassName="activeClicked" style={{mystyle}}>
              <CDBSidebarMenuItem icon="columns" style={{mystyle}} >Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/Help" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Schedule</CDBSidebarMenuItem>
            </Link>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Preparation</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Playback</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Account</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
