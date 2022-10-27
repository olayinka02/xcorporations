import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Styles/LoginPagestyle.css';
import loginlogo from '../Assets/loginlogo.svg';
import CarouselPage from "./CarouselPage";





class LoginPage extends Component {

    render() {
        return (

            <Container fluid className="loginPageBody">
                <Row>
                    <Col  className="CarouselBody" >
                        <div className="CarouselinnerBody">
                        <CarouselPage />
                        {/* <footer>
                            <ul>
                                <li>Amabillstech.com</li>
                                <li>Technical Support</li>
                                <li>Terms Condition</li>
                                <li>Privacy</li>
                            </ul>
                        </footer> */}
                        </div>
                      
                    </Col>

                    <Col className="loginForm">
                        <center>
                            <Link to="/">
                                <Image src={loginlogo} fluid className="formlogo" />
                            </Link>
                            <div className="loginFormBody" >
                                <div>
                                    <h5 style={{ float: 'left', fontSize: 1.0 + 'rem' }}>Login</h5><br /><br />
                                    <h6 style={{ float: 'left', fontSize: 0.7 + 'rem', textAlign: 'left' }} >Welcome back! Please enter your details.</h6><br />
                                </div><br />

                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.5 + 'rem', }} type="email" placeholder="Enter Username" /><br />
                                        <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.5 + 'rem' }} type="email" placeholder="Enter Password" /><br />
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check style={{ float: 'left', fontSize: 0.7 + 'rem', textAlign: 'left' }} type="checkbox" label="Check me out" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <div style={{ float: 'right', fontSize: 0.7 + 'rem', textAlign: 'left' }}>
                                                    forget password
                                                </div>

                                            </Col>
                                        </Row>
                                    </Form.Group><br />
                                    <Link  to="/finaldashboard">
                                        <Button style={{ width: 100 + '%', borderRadius: 0.5 + 'rem', height: 2.5 + 'rem' }} variant="primary">
                                            Login
                                        </Button>
                                    </Link><br />

                                    <p style={{ float: 'left', marginTop: 1 + 'rem', marginLeft: 0.5 + 'rem', color: '#1368D8', fontSize: 0.7 + 'rem', textAlign: 'left' }} className="text-muted">
                                        {" "}Don’t have a business account,
                                        <Link to="/registration">
                                            Register
                                        </Link>
                                    </p><br /><br />
                                </Form>
                            </div>
                        </center>


                    </Col>
                </Row>
            </Container>



        )
    }
};

export default LoginPage;