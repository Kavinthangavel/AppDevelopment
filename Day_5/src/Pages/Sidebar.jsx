import React, { useState } from "react";
import { Layout, Menu, Modal } from "antd";
import { logout, selectUser } from '../Redux/UserSlice';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { useSelector } from 'react-redux';
import {
  HomeOutlined,
  LikeOutlined,
  UserOutlined,
  PhoneOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  FileTextOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false); // State for logout confirmation modal
  const user = useSelector(selectUser);
  const username = user.username;

  const onCollapse = (isCollapsed) => {
    setCollapsed(!isCollapsed);
  };

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleLogout = () => {
    // Perform logout action here
    // Call the logout function or dispatch the action to log out the user
    // Example: logout();
    setLogoutModalVisible(false); // Close the modal after logging out
  };

  const cancelLogout = () => {
    setLogoutModalVisible(false); // Close the modal without logging out
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => onCollapse(collapsed)}
      style={{ backgroundColor: "#fff" }}
      theme="light"
    >
      <div>
        {/* User Info */}
        <div className="user-info" onClick={showLogoutModal}> {/* Add onClick event to show the logout confirmation modal */}
          <UserOutlined />
          {!collapsed ? (
            <span className="username" style={{display: "flex",
            justifyContent: "center",
            alignItems: "center" }}>{username}</span>
          ) : null}
        </div>
      </div>
      <div
        className="logo"
       
      >
        {!collapsed ? (
          <img  />
        ) : (
          <img width="25" />
        )}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
         <Menu  mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />} className="menu-item">
            <Link to="/Dashboard">
              <div style={{ marginLeft: collapsed ? 0 : 16 }}>Dashboard</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LikeOutlined />} className="menu-item">
            <Link to="/AnimeVoting">
              <div style={{ marginLeft: collapsed ? 0 : 16 }}>Vote</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />} className="menu-item">
            <Link to="/Contact">
              <div style={{ marginLeft: collapsed ? 0 : 16 }}>Contact</div>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MessageOutlined />} className="menu-item">
            <Link to="/Feedback">
              <div style={{ marginLeft: collapsed ? 0 : 16 }}>Feedback</div>
            </Link>
          </Menu.Item>
        </Menu>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ marginBottom: 70 }}
        >
        </Menu>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        title="Confirm Logout"
        visible={logoutModalVisible}
        onOk={handleLogout}
        onCancel={cancelLogout}
      >
        Are you sure you want to logout?
      </Modal>
    </Sider>
  );
}
