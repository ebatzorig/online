import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

export default () => {
  const [lockText, setLockText] = useState(false);
  const changeText = () => {
    setLockText(!lockText);
  };

  return (
    <main>
      <section className="vh-lg-100 bg-soft d-flex align-items-center my-4">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-3">Company name</h3>
                  <p className="text-gray">Better to be safe than sorry.</p>
                </div>
                <Form className="mt-5">
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Бүртгэлийн дугаараа оруулна уу</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="42G235..." onChange={changeText}/>
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Харах
                  </Button>
                  <div className="text-center text-md-center">
                    <div className="user-avatar large-avatar"></div>
                  </div>
                </Form>

                <div className="text-center text-md-center">
                  <p className="text-gray">Бид таны барааг түргэн шуурхай хүргэх үйлчилгээг үзүүлж байна</p>
                </div>

                 <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Signin account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
