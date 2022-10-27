import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Gear, ChatLeftText, CardText, ColumnsGap, Files, Collection, CardList, DoorOpen, Receipt, ChatRight, ChatSquare } from 'react-bootstrap-icons';

import '../Styles/menubar.css';
import '../Styles/dashboard.css';
import logo from '../Assets/logo.svg';
import CardDasboard from "./CardDasboard";
import TopNav from "./TopNav";
import UpperRightProfile from "./UpperRightProfile";
import UpperLeftHamburger from "./UpperLeftHamburger";
import SearchInputField from "./SearchInputField";

const Info = [
  {
    id: 1,
    title: "Dashboard",
    icon: <ColumnsGap size={18} />,
    link: "/finaldashboard",

  },
  {
    id: 2,
    title: "Feeds",
    icon: <ChatLeftText size={18} />,
    link: "/finalfeeds",


  },

  {
    id: 3,
    title: "Contact managements",
    icon: <CardText size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 4,
    title: "Branch",
    icon: <Files size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 5,
    title: "Departments",
    icon: <Collection size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 6,
    title: "Schedule & Reports",
    icon: <CardList size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 7,
    title: "Inventory & Stores",
    icon: <DoorOpen size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 8,
    title: "Other Requests",
    icon: <Collection size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 9,
    title: "Sales & Payments",
    icon: <Receipt size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 10,
    title: "Messaging",
    icon: <ChatRight size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 11,
    title: "Constants",
    icon: <CardText size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 12,
    title: "Conferencing",
    icon: <ChatSquare size={18} />,
    link: "/finalfeeds",

  },
  {
    id: 13,
    title: "Settings",
    icon: <Gear size={18} />,
    link: "/finalfeeds",

  },

];






function Dashboard() {

  const { toggleSidebar, broken } = useProSidebar();
  const [data] = useState(Info)

  return (

    <div style={{ display: 'flex',  minHeight: '100vh' }} >

      <Sidebar  height="100vh" width="212px" customBreakPoint="1027px" backgroundColor="#404690" className="sidebar" >
        <Menu
          renderMenuItemStyles={({ level, active }) => ({
            // '.menu-icon': {
            //   backgroundColor: '#e1e1e1',
            // },

            '.menu-anchor': {
              backgroundColor: active ? '#222766' : 'initial',
              color: active ? '#58A0DF' : 'white',
            },
          })}>
          
          <Link to="./" >
          <div className="logoContainer" >
            <Image src={logo} fluid alt="..." />
          </div>
          </Link>


          {
            data.map((item, index) => (
              <Link to={item.link}>
                 <MenuItem 
                className="menuItem"
                icon={item.icon}
              >
                {item.title}
              </MenuItem>
              </Link>
            ))}



        </Menu>
      </Sidebar>


      <main className="Mainbody">
        <Container fluid >
          {broken && (
            <Row className="TopNavMobile" style={{ marginBottom: 0 + 'rem', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <Col xs={5} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 5 + 'px', gap: 15 + 'px', }} >
               
                  <div onClick={() => toggleSidebar()} >
                    <UpperLeftHamburger />
                  </div>
                  <div>
                    <SearchInputField />
                  </div>
               
              </Col>
              <Col xs={7} >
                <UpperRightProfile />
              </Col>
            </Row>
          )}
          {/* top nav for desktop */}
          <div style={{ width: 100 + '%', }}>
            <TopNav />
            <CardDasboard />
          </div>
        </Container>
      </main>
    </div>

  );
}

export default Dashboard;




