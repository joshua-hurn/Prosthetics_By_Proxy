import React from 'react';
import './DonateForm.css';
import {withRouter} from 'react-router';
class DonateForm extends React.Component {
          state= {
            firstName: '',
            lastName:'',
            username: '',
            email: '',
            password: ''
        };
            change = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };
  
          onSubmit= (e) => {    
            e.preventDefault();           
            console.log(this.state);                   
                                                       
        };
        onDonate= e => {
          this.props.history.push("/ThankYou1")
  }
   render () {
    return (
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">First Name </label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
  </div>

  <div class="form-row"/>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Save Contact Information
      </label>
    </div>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Donation Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>


  <button href="/ThankYou1" type="submit" class="btn btn-primary" id="button" onClick={this.onDonate}>Donate</button>
</form>
    ); 
    } 
}   
export default withRouter(DonateForm);