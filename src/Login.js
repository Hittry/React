import React from "react";
import TextField from './TextField';
import Button from "react-bootstrap/Button";


class Login extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        passwd: "",
        passwdError: ""
    };

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    };

    validatePasswd = name => {
        const regval = /[A-Za-z0-9_]/;

        return !regval.test(name)
            ? "Your password must have only a-z or A-Z or numbers 0-9, may be you can use _"
            : "";
    };

    AlertLog = () => {
        const { firstName } = this.state;

        const { passwd } = this.state;

        alert('User name: '+ firstName +' Password: ' + passwd);
    };

    onFirstNameBlur = () => {
        const { firstName } = this.state; //const  firstName = this.state.firstName

        const firstNameError = this.validateName(firstName);

        return this.setState({ firstNameError });
    };

    onFirstNameChange = event =>
        this.setState({
            firstName: event.target.value
        });

    onPswdNameBlur = () => {
        const { passwd } = this.state;

        const passwdError = this.validatePasswd(passwd);

        return this.setState({ passwdError });
    };

    onPswdNameChange = event =>
        this.setState({
            passwd: event.target.value
        });

    render() {
        const { firstNameError, passwdError } = this.state;

        return (
            <>
            <div>
                <TextField name="firstName"
                           label="First name:"
                           onChange={this.onFirstNameChange}
                           onBlur={this.onFirstNameBlur}
                           error={firstNameError} />

                <TextField name="Password"
                           label="Password value:"
                           onChange={this.onPswdNameChange}
                           onBlur={this.onPswdNameBlur}
                           error={passwdError} />
            </div>
                <Button variant="light" onClick={this.AlertLog}>Login</Button>
            </>
        );
    }
}



export default Login;