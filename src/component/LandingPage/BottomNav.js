import React, { Component } from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll" ;
import '../Styles/HeroSectionstyle.css';
import logo from '../Assets/logo.svg';



class BottomNav extends Component {
  render() {

    return (
      <div   className="BottomNav">
        <Container fluid>
            <Row>
            <Col sm={12} md={12} lg={4} xl={4}>
            <div>
            <Nav.Link >
            <LinkRoll   to="herosection" spy={true} smooth={true} >
           
               <Image src={logo} fluid />
            </LinkRoll>
            </Nav.Link>
             
                <p style={{color:'aliceblue',fontSize:0.9+'rem'}} >
                 360 Corporation is a Varius mauris semper blandit vestibulum, 
                 adipiscing condimentum. Malesuada pellentesque blandit nisl 
                 suspendisse phasellus felis pharetra morbi.
                </p>
                <em style={{color:'aliceblue',fontSize:0.9+'rem'}}><span style={{color: '#58A0DF',}}>Email :</span> 360Corporation@gmail.com</em><br/>
                <em style={{color:'aliceblue',fontSize:0.9+'rem'}}><span  style={{color: '#58A0DF',}}>Phone:</span> +99 (0) 101 0000 888</em>
            </div><br/>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4}>
            <h4 style={{color: '#58A0DF',fontSize:1.1+'rem',fontWeight:'bold'}}>Get in touch</h4>
            <p style={{color:'aliceblue',fontSize:0.9+'rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Faucibus et facilisis mi id ultrices. Tortor eleifend diam 
                ut aenean eget diam. Nullam et facilisi non venenatis. 
                Molestie lectus facilisi sed laoreet faucibus.</p>
            </Col>

            <Col sm={12} md={12} lg={4} xl={4}>
            <div className="navlinkingclass" >
              <div style={{color: 'aliceblue',fontSize:0.9+'rem',listStyle: 'none'}} >
               <h4  style={{color: '#58A0DF',fontSize:1.1+'rem',fontWeight:'bold'}}>Usefull Links</h4>
                <li>Home</li>
                <li>About Us</li>
                <li>How it works</li>
                <li>Support</li>
                <li>Pricing</li>
              </div>
             </div> 
            </Col>

            </Row>
        </Container>
      
       
      </div>
    );
  }
}

export default BottomNav;
