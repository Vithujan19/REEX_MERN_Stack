import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, container } from 'reactstrap';
import '../../App.css';
import AddExpenseForm from './AddExpenseForm';
import {Grid} from '@material-ui/core';

const AddExpense = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="AddBtn">
      <Button onClick={toggle}>Add Expenses <i className="fas fa-angle-right"></i></Button>
      </div>
      
      <Modal isOpen={modal} toggle={toggle} className="container" style={{paddingTop:40}}>
        <ModalHeader toggle={toggle}>Add Expenses</ModalHeader>
        <Grid container direction="column" alignItems="center" justify="space-around" spacing={1}>
          <br/>
        <AddExpenseForm/>
        </Grid>
      </Modal>
      
    </div>
  );
}

export default AddExpense;