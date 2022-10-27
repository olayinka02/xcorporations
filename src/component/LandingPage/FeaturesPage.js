import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../Styles/HeroSectionstyle.css';

import FeaturesImageOne from '../Assets/FeaturesImageOne.svg';
import FeaturesImageThree from '../Assets/FeaturesImageThree.svg';
import FeaturesImageTwo from '../Assets/FeaturesImageTwo.svg';
import VectorTwo from '../Assets/VectorTwo.svg';
import ReadmoreArrow from '../Assets/ReadmoreArrow.svg';


class FeaturesPage extends Component {
    render() {

        return (
            <div id='features' className="featuresbody">

                <h5 className="featureheading">features</h5>
                <p className="featuretext">orem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, </p>

                <Container fluid className="featuressectionbody">
                    <Row>
                        <Col md={12} lg={6} xl={6} sm={12}>
                            <Image src={FeaturesImageOne} fluid  className="img-fluid" alt=" "/>
                        </Col>
                        <Col md={12} lg={6} xl={6} sm={12}>
                            <div className="featuresInformation">
                                <b className="Readmorebtn">View Dashboard 
                                <Image src={ReadmoreArrow} fluid  class="ReadmoreArrow" alt=" "/>
                                <br /></b>
                                <h5 className="featuretextOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                                <Image src={VectorTwo} fluid   alt=" "/>
                                <br />
                                <p className="howitworkbodyparagraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse
                                </p>
                                <b className="Readmorebtnfeatures">Read More</b>
                            </div>
                        </Col>
                    </Row>

                </Container>


                <Container fluid className="featuressectionbody">
                    <Row>
                        <Col md={12} lg={6} xl={6} sm={12}>
                            <div className="featuresInformationOne">
                                <b className="Readmorebtn">View Dashboard 
                                <Image src={ReadmoreArrow} fluid  class="ReadmoreArrow" alt=" "/><br /></b>
                                <h5 className="featuretextOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                                <Image src={VectorTwo} fluid   alt=" "/><br />
                                <p className="howitworkbodyparagraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse
                                </p>
                                <b className="Readmorebtnfeatures">Read More</b>
                            </div>
                            <Image src={FeaturesImageTwo} fluid  className="img-fluid SecondimageOne" alt=" "/>
                           

                        </Col>
                        <Col md={12} lg={6} xl={6} sm={12}>
                        <Image src={FeaturesImageTwo} fluid  className="img-fluid SecondimageTwo" alt=" "/>

                            <div className="featuresInformationTwo">
                                <b className="Readmorebtn">View Dashboard 
                                <Image src={ReadmoreArrow} fluid  class="ReadmoreArrow" alt=" "/><br /></b>
                                <h5 className="featuretextOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                                <Image src={VectorTwo} fluid   alt=" "/><br />
                                <p className="howitworkbodyparagraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse
                                </p>
                                <b className="Readmorebtnfeatures">Read More</b>
                            </div>
                        </Col>

                    </Row>

                </Container>


                <Container fluid className="featuressectionbody">
                    <Row>
                        <Col md={12} lg={6} xl={6} sm={12}>
                            <Image src={FeaturesImageThree} fluid  className="img-fluid" alt=" "/>
                           
                        </Col>
                        <Col md={12} lg={6} xl={6} sm={12}>
                            <div className="featuresInformation">
                                <b className="Readmorebtn">View Dashboard 
                                <Image src={ReadmoreArrow} fluid  class="ReadmoreArrow" alt=" "/><br /></b>
                                <h5 className="featuretextOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                                <Image src={VectorTwo} fluid   alt=" "/><br />
                                <p className="howitworkbodyparagraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse donec arcu
                                    enim eu, justo, nunc nulla. Mauris turpis ut est est quis sed
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                    dolor enim at nulla. Nunc non egestas cras habitasse
                                </p>
                                <b className="Readmorebtnfeatures">Read More</b>
                            </div>
                        </Col>

                    </Row>

                </Container>


            </div>
        );
    }
}

export default FeaturesPage;


