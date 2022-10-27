import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll" ;
import { Navbar, Button, Container, Nav, Image } from "react-bootstrap";
import { Sling as Hamburger } from 'hamburger-react';
import '../Styles/NavBodyxstyle.css';
import logo from '../Assets/logo.svg';





class NavBodyx extends Component {

    render() {



        return (
            <div>
                <Navbar id="navbar" fixed="top" expand="lg" className="NavBarBody">
                    <Container fluid>
                        <Navbar.Brand>

                            <Image src={logo} fluid />
                        </Navbar.Brand>


                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "whitesmoke", }} >
                            <Hamburger duration={0.8} hideOutline={false} />
                        </Navbar.Toggle>


                        <Navbar.Collapse id="basic-navbar-nav" className="navChildrenWrap">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className="navwrap">
                                <Nav.Link >
                                    <Link className="navChildren" to="/" >Home </Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <LinkRoll className="navChildren"  to="howitwork" spy={true} smooth={true} >How it works </LinkRoll>
                                </Nav.Link>
                                <Nav.Link >
                                    <LinkRoll className="navChildren"  to="features" spy={true} smooth={true}>Features </LinkRoll>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="./pricing">Pricing </Link>
                                </Nav.Link>

                                <Nav.Link  >
                                     <Link className="navChildren" to="./support">Support </Link> 
                                </Nav.Link>


                                <Link className="btnNownavx" to="/login">
                                    <Button variant="light" className="loginbtn" size="sm">
                                        Login
                                    </Button>
                                </Link>
                              
                                {' '}
                                <Link className="btnNownav" to="/registration">
                                    <Button variant="primary" className="Accountbtn" size="sm" >
                                        Create Account
                                    </Button>
                                </Link>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>


        )


    }
}
export default NavBodyx;
