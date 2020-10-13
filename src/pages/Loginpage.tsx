//This is the initial page. Changes will be made as per requirements.
//Later we can decompose component like inputbox, buttons etc

import React from "react";
import Container  from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from 'react-bootstrap/Button';

const Loginpage = () => {
    return(
        <Container style={{ marginTop: '150px'}} >
            <h3 className="text-center">Login</h3>

            <Row style={{ marginTop: '20px'}} >
                <Col lg={12}>
                    <Row className="justify-content-center">
                        <Col lg={6} className="text-center">
                            <Form>
                                <FormGroup className="text-left">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </FormGroup>

                                <FormGroup className="text-left">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </FormGroup>

                                <Button variant="primary">Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Loginpage;