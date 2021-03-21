
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card } from '@themesberg/react-bootstrap';


export default (props) => {
  const currentYear = moment().get("year");

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  }

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2019-{`${currentYear} `}
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                Company name
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
