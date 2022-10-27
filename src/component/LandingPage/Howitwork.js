import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../Styles/HeroSectionstyle.css';

import bulletpoint from '../Assets/bulletpoint.svg';
import ReadmoreArrow from '../Assets/ReadmoreArrow.svg';



class Howitwork extends Component {
    render() {

        return (
            <div id="howitwork" className="howitworkbody">
                <h5 className="howitwork">How it works</h5>
                <p className="howitworktext">orem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, </p>

                <Container fluid className="howitworkbody" >
                    <Row>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <div className="howitworkbodycard">
                                <div>
                                    <Row>
                                        <Col sm={2} md={2} lg={2} xl={2}>
                                            <Image src={bulletpoint} fluid  className="bulletimage"  alt=" "/>
                                        </Col>
                                        <Col sm={10} md={10} lg={10} xl={10}>
                                            <h5 style={{marginTop:0.5+'rem',fontWeight:'bold',fontSize:1+'rem'}}>Lorem ipsum dolor sit amet,</h5>
                                        </Col>
                                    </Row>
                                </div><br />

                                <p className="howitworkbodyparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed</p>
                                <b className="Readmorebtn">Read More 
                                <Image src={ReadmoreArrow} fluid  className="ReadmoreArrow" alt=" "/>
                              </b>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={4}>
                            <div className="howitworkbodycard">
                                <div>
                                    <Row>
                                        <Col sm={2} md={2} lg={2} xl={2}>
                                            <Image src={bulletpoint} fluid  className="bulletimage"  alt=" "/>
                                           
                                        </Col>
                                        <Col sm={10} md={10} lg={10} xl={10}>
                                            <h5 style={{marginTop:0.5+'rem',fontWeight:'bold',fontSize:1+'rem'}}>Lorem ipsum dolor sit amet,</h5>
                                        </Col>
                                    </Row>
                                </div><br />

                                <p className="howitworkbodyparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed</p>
                                <b className="Readmorebtn">Read More 
                                <Image src={ReadmoreArrow} fluid  className="ReadmoreArrow" alt=" "/>
                              </b>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={4} xl={4}>
                            <div className="howitworkbodycard">
                                <div>
                                    <Row>
                                        <Col sm={2} md={2} lg={2} xl={2}>
                                            <Image src={bulletpoint} fluid  className="bulletimage"  alt=" "/>
                                           
                                        </Col>
                                        <Col sm={10} md={10} lg={10} xl={10}>
                                            <h5 style={{marginTop:0.5+'rem',fontWeight:'bold',fontSize:1+'rem'}}>Lorem ipsum dolor sit amet,</h5>
                                        </Col>
                                    </Row>
                                </div><br />

                                <p className="howitworkbodyparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed</p>
                                <b className="Readmorebtn">Read More 
                                <Image src={ReadmoreArrow} fluid  className="ReadmoreArrow" alt=" "/>
                              </b>
                            </div>
                        </Col>
                    </Row>

                </Container>


            </div>
        );
    }
}

export default Howitwork;
