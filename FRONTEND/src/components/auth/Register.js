import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="card p-3">
            <article className="card-body">
              <h4 className="card-title text-center mb-4 mt-1">Register</h4>
              <hr />
              <p className="text-info text-center">Register Now!</p>
              <p className="text-secondary">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-person" />
                      </span>
                    </div>
                    <input
                      placeholder="Name"
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("form-control", {
                        invalid: errors.name
                      })}
                    />
                  </div>
                  <span className="text-danger">{errors.name}</span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-mail-outline" />
                      </span>
                    </div>
                    <input
                      placeholder="E-mail"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("form-control", {
                        invalid: errors.email
                      })}
                    />
                  </div>
                  <span className="text-danger">{errors.email}</span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-lock" />
                      </span>
                    </div>
                    <input
                      placeholder="Password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                  <span className="text-danger">{errors.password}</span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-lock-outline" />
                      </span>
                    </div>
                    <input
                      onChange={this.onChange}
                      placeholder="Repeat Password"
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password2
                      })}
                    />
                  </div>
                  <span className="text-danger">{errors.password2}</span>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>

      // <div className="container">
      //   <div className="row">
      //     <div className="col-8 offset-md-2">
      //       <Link to="/" className="btn btn-secondary">
      //         <i className="material-icons left">keyboard_backspace</i> Back to
      //         home
      //       </Link>
      //       <div className="col-12 pl-3">
      //         <h4>
      //           <b>Register</b> below
      //         </h4>
      //         <p className="text-secondary">
      //           Already have an account? <Link to="/login">Log in</Link>
      //         </p>
      //       </div>
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <div className="input-field col-12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.name}
      //             error={errors.name}
      //             id="name"
      //             type="text"
      //             className={classnames("", {
      //               invalid: errors.name
      //             })}
      //           />
      //           <label htmlFor="name">Name</label>
      //           <span className="red-text">{errors.name}</span>
      //         </div>
      //         <div className="input-field col-12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.email}
      //             error={errors.email}
      //             id="email"
      //             type="email"
      //             className={classnames("", {
      //               invalid: errors.email
      //             })}
      //           />
      //           <label htmlFor="email">Email</label>
      //           <span className="red-text">{errors.email}</span>
      //         </div>
      //         <div className="input-field col-12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password}
      //             error={errors.password}
      //             id="password"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password
      //             })}
      //           />
      //           <label htmlFor="password">Password</label>
      //           <span className="red-text">{errors.password}</span>
      //         </div>
      //         <div className="input-field col-12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password2}
      //             error={errors.password2}
      //             id="password2"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password2
      //             })}
      //           />
      //           <label htmlFor="password2">Confirm Password</label>
      //           <span className="red-text">{errors.password2}</span>
      //         </div>
      //         <div className="col-12 pl-3">
      //           <button type="submit" className="btn btn-danger mt-3">
      //             Sign up
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
