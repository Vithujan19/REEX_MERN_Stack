import React, { useState } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import {Grid} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const AddExpense = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    return (
      <div>
        <div className="AddBtn">
            <Link to="/CreateUser">
        <Button style={{backgroundColor:"#ff33ff"}} ><PersonAddIcon style={{width:200, height:100}} /><br/>Create Users</Button>
        </Link>
        </div>   
      </div>
    );
  }

export default AddExpense;