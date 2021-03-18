import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Button, ButtonGroup, Breadcrumb} from '@themesberg/react-bootstrap';
import { GeneralInfoForm } from "../components/Forms";
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item active>Бүртгэл</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Бүртгэл</h4>
          <p className="mb-0">Та барааны бар код болон бусад мэдээллийг бөглөнө үү.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          <GeneralInfoForm />
        </Col>
      </Row>
    </>
  );
};
