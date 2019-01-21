import React, { Component } from 'react';
import "./RevLogin.css";
import { Button } from 'react-bootstrap';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val => {
        val == null && (valid = false);

    });

    return valid;
};
class RevLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            formErrors: {
                Username: "",
                password: ""
            }
        };
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case "Username":
                formErrors.Username =
                    value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            case "password":
                formErrors.password = value.length < 6 && value.length > 0 ? "minimum  6 characters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            Username:${this.state.Username}
           Password:${this.state.password}

            `)
        } else {
            console.error('FORM INVALID -DISPLAY ERROR MESSAGE');
        }
    };
    onPageChange = (e) => {
        this.props.history.push(e.target.name);
    };


    render() {
        const { formErrors } = this.state;
        return (

            <div className="wrapper" >
                <div className="form-wrapper">
                    <h1>Revenue Head Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="Username">
                            <label htmlFor="Username">Username</label>
                            <input className={formErrors.Username.length > 0 ? "error" : null}

                                placeholder="Username"
                                type="text"
                                name="Username"
                                value={this.state.Username}
                                noValidate
                                onChange={this.handleChange} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                noValidate
                                onChange={this.handleChange} />
                        </div>
                        <div className="Login">
                            <Button block bsSize="large" type="submit" onClick={this.onPageChange} name="/dashboard" > Login</Button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}




export default RevLogin;