import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import '../Styles/HeroSectionstyle.css';



class Newsletter extends Component {
    render() {

        return (
            <div style={{paddingRight:0.8+'rem',paddingLeft:0.8+'rem',}}>
                <Container className="NewsletterBody">
                    <Row className="NewsletterBodySection" >
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <h4 className="Newslettertext">Subscribe to our Newsletter to know more about us</h4>

                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div>
                                <Form>
                                    <Row>
                                        <Col sm={12} md={12} lg={8} xl={8}>
                                            <Form.Control  type="email" placeholder="Enter email" /><br/>
                                        </Col>
                                        <Col sm={12} md={12} lg={4} xl={4}>
                                            <Button style={{width:100+'%'}} variant="primary">{' '} Subscribe {' '}</Button>
                                        </Col>

                                    </Row>


                                </Form>

                            </div>

                        </Col>

                    </Row>
                </Container>


            </div>
        );
    }
}

export default Newsletter;

