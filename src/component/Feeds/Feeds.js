import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Gear, ChatLeftText, CardText, ColumnsGap, Files, Collection, CardList, DoorOpen, Receipt, ChatRight, ChatSquare } from 'react-bootstrap-icons';

import '../Styles/menubar.css';
import '../Styles/dashboard.css';
import logo from '../Assets/logo.svg';
import TopNav from "../Dashboard/TopNav";
import UpperRightProfile from "../Dashboard/UpperRightProfile";
import UpperLeftHamburger from "../Dashboard/UpperLeftHamburger";
import SearchInputField from "../Dashboard/SearchInputField";






function Feeds() {

    const { toggleSidebar, broken } = useProSidebar();
    

    return (

        <div style={{ display: 'flex', minHeight: '100vh' }} >

            <Sidebar height="100vh" width="212px" customBreakPoint="1027px" backgroundColor="#404690" className="sidebar" >
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


             <Link to="./finaldashboard" >
              <MenuItem className="menuItem" icon= {<ColumnsGap size={18} />} >
                dashboard
              </MenuItem>
              </Link>

              <MenuItem active className="menuItem" icon= {<ChatLeftText size={18} />} >
                Feeds
              </MenuItem>
              
              <MenuItem className="menuItem" icon= {<CardText size={18} />} >
                Contact Managements
              </MenuItem>

              <MenuItem className="menuItem" icon= {<Files size={18} />} >
                Branch
              </MenuItem>

              <MenuItem className="menuItem" icon= { <Collection size={18} />} >
                Department
              </MenuItem>

              <MenuItem className="menuItem" icon= { <CardList size={18} />} >
                Schedule & Reports
              </MenuItem>

              <MenuItem className="menuItem" icon= {<DoorOpen size={18} />} >
                Inventory & Stores
              </MenuItem>

              <MenuItem className="menuItem" icon= {<Collection size={18} />} >
                Other Request
              </MenuItem>

              <MenuItem className="menuItem" icon= {<Receipt size={18} />} >
                Sales & Payments
              </MenuItem>

              <MenuItem className="menuItem" icon= {<ChatRight size={18} />} >
                Messaging
              </MenuItem>
              
              <MenuItem className="menuItem" icon= { <CardText size={18} />} >
                Constants
              </MenuItem>

              <MenuItem className="menuItem" icon= { <ChatSquare size={18} />} >
                Conferencing
              </MenuItem>

              <MenuItem className="menuItem" icon= { <Gear size={18} />} >
                Settings
              </MenuItem>

                     



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
                        <h1>feeds</h1>
                    </div>
                </Container>
            </main>
        </div>

    );
}

export default Feeds;




