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
            <Button style={{backgroundColor:"#fff", color:"#1278B8"}} ><PersonAddIcon style={{width:230, height:100}} /><br/>Create Users</Button>
        </Link>
        </div>   
      </div>
    );
  }

export default AddExpense;