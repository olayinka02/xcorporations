import React from "react";
import {Row, Col } from 'react-bootstrap';

import UpperRightProfile from "./UpperRightProfile";
import UpperLeftHamburger from "./UpperLeftHamburger";
import SearchInputField from "./SearchInputField";

import '../Styles/dashboard.css';


function TopNav (){
    return (
        <div className="TopNavDesktop" >
            <Row style={{ marginBottom: 0.2 + 'rem', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
              <Col xs={5} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 7 + 'px', gap: 15 + 'px', }}>
                  <div className="Hamburger" >
                    <UpperLeftHamburger  className="Hamburger" />
                  </div>
                  <div>
                    <SearchInputField />
                  </div>
              </Col>
              <Col xs={7} >
                <UpperRightProfile />
              </Col>
            </Row>
        </div>
    );
}
export default TopNav;