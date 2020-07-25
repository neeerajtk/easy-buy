import React from 'react';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    render(){
        return(
            <div className="sign-in">
                <h2 >Already have an account</h2>
                <span>Sign in with email and password </span>

                <form >
                    <input type="email" name="email" value={this.state.email} required/>
                    <input type="password" name="password" value={this.state.password} required/>
                    <input type="submit"  value="Submit" required/>

                </form>

            </div>
        )
    }
}

export default SignIn;