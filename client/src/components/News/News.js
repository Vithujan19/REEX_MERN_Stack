import React, { useState } from "react";
import { Paper } from '@material-ui/core';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <p className="has-text-left">
        {resultString}
        {isTruncated ? "...." : null}
      </p>

      <Row>
        <Col xs={12} sm={10}>
          {text.slice(' ').length > 100 ? <Button color="primary" onClick={toggleIsTruncated} className="tag is-info is-small">
            {isTruncated ? "Read More" : "Read Less"}
          </Button> : null}
        </Col>
        <Col xs={12} sm={2}>
          {currentUser.role === "admin" ?
            <Button
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Delete
            </Button> : null}
        </Col>
      </Row>
    </>
  )

}


function News(props) {
  const {news} = props;

  return (
    <>
    <Row>
    <Col xs={12} sm={1}></Col>
    <Col xs={12} sm={10}>
    <Card>
        <Paper elevation={4}>
          <CardBody>
            <CardTitle style={{ textAlign: "center" }} className=" mb-3" tag="h3">
              Card title
          </CardTitle>
            <hr />
            <ReadMore>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure
              repellat, soluta, optio minus ut reiciendis voluptates enim
              impedit veritatis officiis.
          </ReadMore>
          </CardBody>
        </Paper>
      </Card>
    </Col>
    <Col xs={12} sm={1}></Col>
    </Row>
    </>
  );
}

export default News;