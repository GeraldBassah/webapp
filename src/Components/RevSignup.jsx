import React, { Component } from 'react';
import "./RevSignup.css";
import { Button } from 'react-bootstrap';
import { Layout, Header, Navigation, Drawer, Content, IconButton, MenuItem, Menu } from "react-mdl";

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

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

class RevSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            First Name:${this.state.firstName}
            Last Name:${this.state.lastName}
            Email:${this.state.email}
           Password:${this.state.password}

            `)
        } else {
            console.error('FORM INVALID -DISPLAY ERROR MESSAGE');
        }
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            case "lastName":
                formErrors.lastName = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value) && value.length > 0 ? "" : "invalid email address";
                break;
            case "password":
                formErrors.password = value.length < 6 && value.length > 0 ? "minimum  6 characters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <Layout fixedHeader>
                    <Header className="Header" title={<span><strong>MMDA</strong></span>}>
                        <Navigation>

                        </Navigation>
                    </Header>
                    <Content className="wrapper">
                        <div className="form-wrapper">

                            <h1>Create Account For Sectional Head</h1>
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="firstName">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className={formErrors.firstName.length > 0 ? "error" : null}
                                        placeholder="First Name"
                                        type="text"
                                        name="firstName"
                                        noValidate
                                        onChange={this.handleChange} />
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>
                                <div className="lastName">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className={formErrors.lastName.length > 0 ? "error" : null}
                                        placeholder="Last Name"
                                        type="text"
                                        name="lastName"
                                        noValidate
                                        onChange={this.handleChange} />
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                </div>
                                <div className="email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className={formErrors.email.length > 0 ? "error" : null}
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        noValidate
                                        onChange={this.handleChange} />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className={formErrors.password.length > 0 ? "error" : null}
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        noValidate
                                        onChange={this.handleChange} />
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                                <div className="createAccount">
                                    <Button type="submit">Create Account</Button>
                                </div>
                            </form>
                        </div>

                    </Content>

                </Layout>
            </div>



        );
    }
}
export default RevSignup;