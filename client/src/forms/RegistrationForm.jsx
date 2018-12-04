import React from 'react';
import './RegistrationForm.css';
import {withRouter} from 'react-router';

 class RegistrationForm extends React.Component {
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
onRegister= e => {
    this.props.history.push("/ThankYou1");
}
render() {
    return (

        <div class="container">
			<div class="row main">
				<div class="main-login main-center">
				<h5>Sign up and Join! It's 100% free!</h5>
					<form class="" method="post" action="#">
						
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Your Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Your Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>

						<div class="form-group ">
							<button href ="/ThankYou1" target="_blank" type="button" id="button" class="btn btn-primary btn-lg btn-block login-button" onClick={this.onRegister}>Register</button>
						</div>
						
					</form>
				</div>
			</div>
		</div>


    )




        // <form>
        //     <input 
        //     name= 'firstName'
        //     placeholder='First name' 
        //     value = {this.state.firstName} 
        //     onChange= {e => this.change(e)} 
        //     />
        //     <br />
        // <input 
        //     name= 'lastName'
        //     placeholder='Last name' 
        //     value = {this.state.lastName} 
        //     onChange= {e => this.change(e)} 
        //     />
        //     <br />
        // <input 
        //     name= 'username'
        //     placeholder='Username' 
        //     value = {this.state.username} 
        //     onChange= {e => this.change(e)} 
        //     />
        //     <br />
        // <input 
        //     name='email'
        //     placeholder='Email' 
        //     value = {this.state.email} 
        //     onChange= {e => this.change(e)} 
        //     />
        //     <br />
        // <input 
        //     name='password'
        //     type='password'
        //     placeholder='Password' 
        //     value = {this.state.password} 
        //     onChange= {e => this.change(e)} 
        //     />
        //     <br />
        //     <button onClick={e=> this.onSubmit(e)}>Submit</button>
        //     </form>
    

    

    }
}      




export default withRouter(RegistrationForm);