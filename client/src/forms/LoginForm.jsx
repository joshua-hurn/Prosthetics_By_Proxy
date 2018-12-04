import React from 'react';
import './LoginForm.css'
import { Form, Button } from 'semantic-ui-react';
// import Validator from 'validator';
import InlineError from "../messages/InlineError";


class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    };
    validate = (data) => {
        const errors = {};
        // if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (
           
        //     <Form onSubmit={this.onSubmit}>
        //         <Form.Field>
        //             <label htmlFor="email"> Email </label>
        //             <input type="email" id="email" name="email" placeholder="example@example.com"
        //                 value={data.email}
        //                 onChange={this.onChange}
        //             />
        //             {errors.email && <InlineError text={errors.email} />}
        //         </Form.Field>
        //         <Form.Field>
        //             <label htmlFor="password"> Password </label>
        //             <input type="password" id="password" name="password" placeholder="Make it secure"
        //                 value={data.password}
        //                 onChange={this.onChange}
        //             />
        //             {errors.password && <InlineError text={errors.password} />}
        //         </Form.Field>
        //         <Button primary> Login </Button>
        // </Form>
           <div class="container register">
             <div class="row">
                 <div class="col-md-12">
                     <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                         <li class="nav-item">
                             <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                         </li>
    
                     </ul>
                           
                             <div class="row register-form">
                                 <div class="col-md-12">
                                     <form method="post">
                                         <div class="form-group">
                                         <label htmlFor="email"> Email </label>
                    <input type="email" id="email" name="email" placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    /> 
                                         </div>
                                         <div class="form-group">
                                         <label htmlFor="password"> Password </label>
                                            <input type="password" id="password" name="password" placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                    />
                                         </div>
                                         <div class="form-group">
                                         <Button primary> Login </Button>
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                </div> 
    </div>
                     
                   
        );
    }

}

export default LoginForm;