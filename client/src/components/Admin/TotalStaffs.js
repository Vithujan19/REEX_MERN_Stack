import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function TotalStaffs(props) {
  const { managers, employees } = props;

  //   let topupsCopy = [];
  //   let pending = [];
  //   let approved = [];
  //   let rejected = [];
  //   let totalTopupAmount = 0;

  let managersCopy = [];
  let managersMale = [];
  let managersFemale = [];

  let employeesCopy = [];
  let employeesMale = [];
  let employeesFemale = [];

  if (employees && managers) {
    managersCopy = managers;
    employeesCopy = employees;

    managersMale = managersCopy.filter((manager) => {
      return manager.gender === 'male';
    });

    managersFemale = managersCopy.filter((manager) => {
      return manager.gender === 'female';
    });

    employeesMale = employeesCopy.filter((employee) => {
      return employee.gender === 'male';
    });

    employeesFemale = employeesCopy.filter((employee) => {
      return employee.gender === 'female';
    });
  }

  return (
    <div>
      <Title>Staffs</Title>
      <hr />
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6" style={{ fontWeight: 'bold' }}>
            Total Managers:
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {managersCopy.length}
          </Typography>
        </Col>
      </Row>
      <Typography>
        <Row>
          <Col xs={12} sm={6}>
            <span style={{ color: '#ff6600' }}>
              Male: {managersMale.length}
            </span>
          </Col>
          <Col xs={12} sm={6}>
            <span style={{ color: '#00b300' }}>
              Female: {managersFemale.length}
            </span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6" style={{ fontWeight: 'bold' }}>
            Total Employees:
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {employeesCopy.length}
          </Typography>
        </Col>
      </Row>
      <Typography>
        <Row>
          <Col xs={12} sm={6}>
            <span style={{ color: '#ff6600' }}>
              Male: {employeesMale.length}
            </span>
          </Col>
          <Col xs={12} sm={6}>
            <span style={{ color: '#00b300' }}>
              Female: {employeesFemale.length}
            </span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Typography color="textSecondary">
        until: {new Date().toDateString()}
      </Typography>
    </div>
  );
}
