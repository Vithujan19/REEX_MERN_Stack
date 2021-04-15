import { Paper } from '@material-ui/core';
import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap';
import Receipt from '../Employee/Receipt.png';

const TopupPendingDetail = (props) => {
//   const { rowData, transactions, reimbursements, bankDetails } = props;

//   let expenseDetails = {
//     to: '',
//     transactionDate: '',
//     amount: '',
//     category: '',
//     paymentType: '',
//     description: '',
//     receiptUrl: '',
//     status: '',
//   };

//   let reimbursementDetails = {
//     to: '',
//     transactionId: '',
//     amount: '',
//     status: '',
//     createdAt: '',
//     updatedAt: '',
//     bankName: '-',
//     bankBranch: '-',
//     bankAccountNumber: '-',
//   };

//   let relatedTransaction = {};
//   let relatedReimbursement = {};
//   let relatedBankDetail = {};

//   const getDate = (realDate) => {
//     const datee = new Date(realDate);
//     const year = datee.getUTCFullYear();
//     const month = datee.getUTCMonth();
//     const date = datee.getUTCDate();
//     const correctDate = date + '-' + month + '-' + year;
//     return correctDate;
//   };

//   if (rowData && transactions && reimbursements) {
//     relatedTransaction = transactions.find(
//       (transaction) => transaction._id === rowData.transactionId
//     );

//     relatedReimbursement = reimbursements.find(
//       (reimbursement) => reimbursement._id === rowData.id
//     );

//     relatedBankDetail = bankDetails.find(
//       (bankDetail) =>
//         bankDetail._id === relatedReimbursement.reimbursementAccount
//     );

//     expenseDetails.to = rowData.managerName;
//     expenseDetails.amount = rowData.amount;
//     expenseDetails.status = rowData.status;
//     expenseDetails.paymentType = relatedTransaction.paymentMethod;
//     expenseDetails.description = relatedTransaction.description;
//     expenseDetails.receiptUrl = relatedTransaction.receiptUrl;
//     expenseDetails.transactionDate = getDate(
//       relatedTransaction.transactionDate
//     );
//     expenseDetails.category = relatedTransaction.category;

//     reimbursementDetails.to = rowData.managerName;
//     reimbursementDetails.transactionId = rowData.id;
//     reimbursementDetails.amount = expenseDetails.amount;
//     reimbursementDetails.status = rowData.status;
//     reimbursementDetails.createdAt = getDate(relatedReimbursement.createdAt);
//     reimbursementDetails.updatedAt = getDate(relatedReimbursement.updatedAt);
//     if (relatedBankDetail) {
//       reimbursementDetails.bankName = relatedBankDetail.bank;
//       reimbursementDetails.bankBranch = relatedBankDetail.branch;
//       reimbursementDetails.bankAccountNumber = relatedBankDetail.accountNumber;
//     }

//     console.log('RowData : ', rowData);
//     console.log('expenseDetails : ', expenseDetails);
//     console.log('reimbursementDetails : ', reimbursementDetails);
//   }

  const onClick = () => {
    window.location.reload();
  };
  var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Row>
        <Col xs={12} sm={6}>
          <button
            className="btn btn-primary"
            style={{ width: 100 }}
            onClick={onClick}
          >
            Back
          </button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} sm={8}>
          <Card>
            <Paper elevation={4}>
              <CardBody>
                <CardTitle
                  style={{ textAlign: 'center', color: '#1278B8' }}
                  tag="h5"
                >
                  Topup Details
                </CardTitle>
                <hr />
                <Row>
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      <span style={{ fontWeight: 'bold' }}>Employee Name :</span>{' '}
                      {/* {reimbursementDetails.to}{' '} */}Kovarthanan
                    </CardSubtitle>
                  </Col>
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      <span style={{ fontWeight: 'bold' }}>
                        Topup Id :{' '}
                      </span>
                      2222222222
                    </CardSubtitle>
                  </Col>
                  <br />
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      <span style={{ fontWeight: 'bold' }}>Amount : </span>
                     500
                    </CardSubtitle>
                  </Col>
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>Status : </span>
                      Accept
                    </CardSubtitle>
                  </Col>
                  <br />
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>
                        Created Date :{' '}
                      </span>
                      24-05-2020
                    </CardSubtitle>
                  </Col>
                  <Col xs={12} sm={6}>
                    <CardSubtitle>
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>
                        Updated Date :{' '}
                      </span>
                      25-06-2021
                    </CardSubtitle>
                  </Col>
                  <br />
                </Row>
                {currentUser.role === 'manager' ? (
                  <Row>
                    <Col xs={12} sm={6}>
                      <button className="btn btn-primary">Accept</button>
                    </Col>
                    <Col xs={12} sm={6}>
                      <button className="btn btn-danger">Reject</button>
                    </Col>
                  </Row>
                ) : null}
              </CardBody>
            </Paper>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Paper elevation={4}>
            <CardImg
              style={{ width: 'auto', height: 400 }}
              top
              width="100%"
            //   src={relatedTransaction.receiptUrl}
              alt="Card image cap"
            />
          </Paper>
        </Col>
      </Row>
    </div>
  );
};

export default TopupPendingDetail;
