import React from "react";
import {Paper} from '@material-ui/core';
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

function MoreNews() {
    var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <Card>
      <Paper elevation={4}>
        <CardBody>
          <CardTitle style={{textAlign:"center"}} className=" mb-3" tag="h3">
            News title
          </CardTitle>
          <hr/>
          <CardText className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure
            repellat, soluta, optio minus ut reiciendis voluptates enim
            impedit veritatis officiis.
          </CardText>
          <Row>
          <Col xs={12} sm={10}>
          <Button
            color="primary"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
           show more
          </Button>
          </Col>
          <Col xs={12} sm={2}>
              {currentUser.role==="admin" ? 
              <Button
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
             Delete
            </Button> : null }
          </Col>
          </Row>
        </CardBody>
        </Paper>
      </Card>
    </>
  );
}

export default MoreNews;