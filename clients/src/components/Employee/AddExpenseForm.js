import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class AddExpenseForm extends Component{

    constructor(props) {
    super(props);
    this.state = {
      managerIncharge: '',
      category: '',
      paymentMethod: '',
      amount: null,
      description: '',
      receiptImage: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { managerIncharge, category, paymentMethod, amount, description, receiptImage } = this.state;
    // alert(this.state.managerIncharge);
    // alert(this.state.amount);
    // alert(this.state.category);
    // alert(this.state.paymentMethod);
    // alert(this.state.description);
    // alert(this.state.file);
    console.log("Current State is " + JSON.stringify(this.state));
    axios.post('http://localhost:3000/transaction', { managerIncharge, category, paymentMethod, amount, description, receiptImage })
      .then((response) => {
          console.log("Successfully updated");
          console.log(response);
      },
      (error) =>{
        console.log("Error : ", error);
      });
  }

    render(){
        // const managerIncharge = [
        //     { manager: 'manager1' },
        //     { manager: 'manager2' },
        //     { manager: 'manager3' },
        //     { manager: 'manager4' },
        //     { manager: 'manager5'},
        //     { manager: "manager6" },
        //     { manager: 'manager7'},
        // ];
        const { managerIncharge, category, paymentMethod, amount, description, receiptImage } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="container" >
            
            <FormGroup> 
                <Label for="managerSelect">To</Label>
                <Input required type="select" className="form-control" name="managerIncharge" value={managerIncharge} onChange={this.onChange} placeholder="Manager" >
                    <option aria-label="None" value="" />
                    <option value="id1">Employee1</option>
                    <option value="id2">Employee2</option>
                    <option value="id3">Employee3</option>
                    <option value="id4">Employee4</option>
                    <option value="id5">Employee5</option>
                </Input>
                {/* <Autocomplete
                    id="combo-box-demo"
                    required
                    options={managerIncharge}
                    getOptionLabel={(option) => option.manager}
                    style={{ width: "auto" }}
                    renderInput={(params) => <TextField {...params} label="Manager" variant="outlined" />}
                    /> */}
            </FormGroup>
            <FormGroup>
                <Label for="categorySelect">Category</Label>
                <Input required type="select" name="category" value={category} onChange={this.onChange}>
                    <option aria-label="None" value="" />
                    <option value="Travel">Travel</option>
                    <option value="Food" >Food</option>
                    <option value="Hotel">Accomodation</option>
                    <option value="Other">Advertisement</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="paymentSelect">Payment Method</Label>
                <Input required type="select" name="paymentMethod" value={paymentMethod} onChange={this.onChange} >
                    <option aria-label="None" value="" />
                    <option value="Own Cash" >Own Cash</option>
                    <option value="Card Provided">Card Provided</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <InputGroup>
                    <InputGroupText>Rs.</InputGroupText>
                    <Input 
                        placeholder="Amount" 
                        required
                        name="amount" 
                        value={amount} 
                        onChange={this.onChange}
                        min={0} 
                        max={10000} 
                        type="number" 
                        step="1" 
                    />
                    <InputGroupText>.00</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    value={description} 
                    onChange={this.onChange}  
                    id="exampleText" 
                    />
            </FormGroup>
            <FormGroup>
                <Label for="receiptImage">Attach Receipt</Label>
                <Input 
                    type="file" 
                    name="receiptImage" 
                    value={receiptImage} 
                    onChange={this.onChange} 
                    id="receiptImage" 
                    />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
        </FormText>
            </FormGroup>
            <div className="SubmitBtn">
                <Button type="sunbmit">Submit</Button>
            </div>
        </Form>
    );
}
}

export default AddExpenseForm;