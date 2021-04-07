import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, container } from 'reactstrap';
import TopupForm from './TopupForm';
import '../../App.css';
import {Grid} from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';

const Topup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="AddBtn">
      <Button style={{backgroundColor:"#ff4dd2"}} onClick={toggle}><HowToVoteIcon style={{width:200, height:100}} /><br/>Topup</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="container" style={{paddingTop:40}}>
        <ModalHeader toggle={toggle}>Topup Request</ModalHeader>
        <Grid container direction="column" alignItems="center" justify="space-around" spacing={1}>
          <br/>
        <TopupForm/>
        </Grid>
      </Modal>
    </div>
  );
}

export default Topup;