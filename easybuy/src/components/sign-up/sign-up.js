import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase';


import './sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword){
            alert("Password Mismatch !")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, displayName);

        }catch(error){
            console.log(error);
            
        }
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" 
                    name="displyName"
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Nmae'
                    required/>
                    <FormInput type="email" 
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required/>
                    <FormInput type="password" 
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required/>
                     <FormInput type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    require/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                   
                </form>
            </div>
        )
    }
}

export default SignUp;