import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

import '../Styles/HeroSectionstyle.css';

import VectorOne from '../Assets/VectorOne.svg';
import buttonarrow from '../Assets/buttonarrow.svg';
import RightImage from '../Assets/RightImage.svg';
import Line from '../Assets/Line.svg';
import marks from '../Assets/marks.svg';





class HeroSection extends Component {

    render() {
        return (

            <div id="herosection" className="heroSection">
                <Container fluid >
                    <Row>
                        <Col sm="6">
                            <div className="Herolefttext">
                                <h2 className="Herolefttextheading">Business activities at your <span class="fingertip">finger tips</span></h2>
                                <Image src={VectorOne} fluid  className="img-fluid" alt="vectorone"/>
                                <p class="Herolefttextparagraph">
                                    Llorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    cras habitasse donec arcu enim eu, justo, nunc nulla. Mauris turpis
                                    ut est est quis sed praesent. Nulla integer risus dolor enim at nulla.
                                    Nunc non egestas vitae quis turpis ut est est quis sed praesent. Nulla
                                    integer risus dolor .
                                </p>
                                {/* <Link to="/registration" > */}
                                <Button className="getstartedbutton" >{' '}Get Started{' '}
                                <Image src={buttonarrow} fluid   className="img-fluid" alt="vectorone"/>
                                </Button>
                                {/* </Link> */}
                            </div>
                        </Col>
                        <Col sm="6" >
                            <div className="RightImagebody">
                            <Image src={RightImage} fluid   className="img-fluid" alt=" "/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="Pointwrapbody">
                    <Row>
                        <Image src={Line} fluid  className="lineimage" alt=" "/>
                        
                        <Col className="Pointbody">
                            <Row>
                                <Col  xs={12} md={4}>
                                    <Row className="wrapeachelement">
                                        <Col xs={2} md={2} >
                                        <Image src={marks} fluid  alt=" "/>
                                        </Col>

                                        <Col  xs={10} md={10}>
                                            <div className="PointOnetext">
                                                <h6>ed praesent. Nulla integer risus dolor enim at nulla. Nunc non egestas vitae </h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>


                                <Col xs={12} md={4}>
                                    <Row className="wrapeachelement">
                                        <Col xs={2} md={2}  >
                                        <Image src={marks} fluid  alt=" "/>
                                        </Col>

                                        <Col  xs={10} md={10} >
                                            <div className="PointOnetext">
                                                <h6>ed praesent. Nulla integer risus dolor enim at nulla. Nunc non egestas vitae </h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>


                                <Col  xs={12} md={4}>
                                    <Row className="wrapeachelement">
                                        <Col xs={2} md={2}  >
                                        <Image src={marks} fluid  alt=" "/>
                                        </Col>

                                        <Col  xs={10} md={10} >
                                            <div className="PointOnetext">
                                                <h6>ed praesent. Nulla integer risus dolor enim at nulla. Nunc non egestas vitae </h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                
                            </Row>
                        </Col>

                        <Image src={Line} fluid  className="lineimage" alt=" "/>
                    </Row>

                </Container>


            </div>

        )
    }
};

export default HeroSection;