import React from "react";
import TextField from './TextField';
import Button from "react-bootstrap/Button";


class Register extends React.Component {
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
            ? "Your passwd must have only a-z or A-Z or numbers 0-9, may be you can use _"
            : "";
    };

    onFirstNameBlur = () => { //еще один обработчик, возвращает пустую строку если ввод праивельный и вывод ошибки если кривой вызывается когда пользователь покинул поле ввода
        const { firstName } = this.state;

        const firstNameError = this.validateName(firstName);

        return this.setState({ firstNameError });
    };

    onFirstNameChange = event =>//обработчик событий, запускается каждый раз когда пользователь вводит символ в поле
        this.setState({
            firstName: event.target.value
        });

    onPswdNameBlur = () => {
        const { passwd } = this.state;

        const passwdError = this.validatePasswd(passwd);

        return this.setState({ passwdError });
    };

    AlertReg = () => {
        const { firstName } = this.state;

        const { passwd } = this.state;

        alert('User name: '+ firstName +' Password: ' + passwd);
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
                <Button variant="light" onClick={this.AlertReg}>Register</Button>
            </>
        );
    }
}



export default Register;