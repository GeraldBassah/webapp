import React, { Component } from "react";
import "./SecLogin.css";
import { Button } from "react-bootstrap";
import { Layout, Header, Navigation, Content } from "react-mdl";

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
class SecLogin extends Component {
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
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout fixedHeader>
          <Header className="Header" title={<span><strong>MMDA SECTIONAL HEAD</strong></span>} style={{ background: '#333333' }}>
            <Navigation>

            </Navigation>
          </Header>
          <Content className="wrapper">
            <div className="form-wrapper">
              <h1>Section Head Login</h1>
              <form>
                <div className="Username">
                  <label htmlFor="Username">Username</label>
                  <input className={formErrors.Username.length > 0 ? "error" : null}
                    placeholder="Username"
                    type="text"
                    name="Username"
                    value={this.state.Username}
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="Login">
                  <Button bsSize="large" bsStyle="primary" type="submit" onClick={this.onPageChange} name="/secdashboard">Login</Button>
                </div>
              </form>
            </div>
          </Content>
          <footer id="footer">
            <p>Copyright MMDA, &copy; 2019</p>
          </footer>
        </Layout>



      </div>
    );
  }
}
export default SecLogin;
