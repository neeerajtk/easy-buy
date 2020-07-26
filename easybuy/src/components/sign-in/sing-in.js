import React from 'react';

import FormInput from '../form-input/form-input';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
        
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2 >Already have an account</h2>
                <span>Sign in with email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    required
                    />
                    <label>Email</label>
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    required
                    />
                    <input type="submit"  value="Submit" required/>

                </form>

            </div>
        )
    }
}

export default SignIn;