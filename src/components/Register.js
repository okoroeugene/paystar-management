import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import toastr from 'toastr';
import Axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false
        }
    }
    componentDidMount() {
        // toastr.success('The title', 'The message')
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isLoggedIn && nextProps.user.isLoggedIn != this.props.user.isLoggedIn) {
            toastr.info('Account has been created successfully. Kindly proceed to login.');
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        }
    }
    doRegister() {
        this.setState({ isProcessing: true });
        let email = this.refs.email.value;
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let rePassword = this.refs.rePassword.value;
        let role = this.refs.role.value;
        if (!email || !username || !password) {
            this.setState({ isProcessing: false })
            return toastr.error("Invalid credentials!");
        } else if (password != rePassword) {
            this.setState({ isProcessing: false })
            return toastr.error("Password and confirm password does not match");
        } else {

            return this.props.doRegister({
                email: email,
                username: username,
                password: password,
                role: role
            })
        }
    }
    render() {
        return (
            <section className="login-block">
                {/* Container-fluid starts */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="md-float-material form-material">
                                <div className="text-center">
                                    <img src="src/assets/images/logo.png" alt="logo.png" />
                                </div>
                                <div className="auth-box card">
                                    <div className="card-block">
                                        <div className="row m-b-20">
                                            <div className="col-md-12">
                                                <h3 className="text-center txt-primary">Sign up</h3>
                                            </div>
                                        </div>
                                        <div className="form-group form-default">
                                            <input ref={"username"} type="text" name="user-name" required="required" className="form-control" required />
                                            <span className="form-bar" />
                                            <label className="float-label">Choose Username</label>
                                        </div>
                                        <div className="form-group form-default">
                                            <input ref={"email"} type="text" name="email" required="required" className="form-control" required />
                                            <span className="form-bar" />
                                            <label className="float-label">Your Email Address</label>
                                        </div>
                                        <div className="form-group row">
                                            {/* <label className="col-sm-2 col-form-label">Select Box</label> */}
                                            <div className="col-sm-12">
                                                <select ref={"role"} name="select" className="form-control fill">
                                                    <option value="opt1">--- select user role ---</option>
                                                    <option value="superAdmin">Super Admin</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="user">User</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group form-default">
                                                    <input ref={"password"} type="password" name="password" required="required" className="form-control" required />
                                                    <span className="form-bar" />
                                                    <label className="float-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group form-default">
                                                    <input ref={"rePassword"} type="password" name="confirm-password" required="required" className="form-control" required />
                                                    <span className="form-bar" />
                                                    <label className="float-label">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row m-t-25 text-left">
                                            <div className="col-md-12">
                                                <div className="checkbox-fade fade-in-primary">
                                                    <label>
                                                        <input type="checkbox" defaultValue />
                                                        <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary" /></span>
                                                        <span className="text-inverse">I read and accept <a href="#">Terms &amp; Conditions.</a></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkbox-fade fade-in-primary">
                                                    <label>
                                                        <input type="checkbox" defaultValue />
                                                        <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary" /></span>
                                                        <span className="text-inverse">Send me the <a href="#!">Newsletter</a> weekly.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row m-t-30">
                                            <div className="col-md-12">
                                                <button
                                                    style={this.state.isProcessing ? {
                                                        backgroundColor: "#f99c9c",
                                                        borderColor: "#f99c9c"
                                                    } : {}}
                                                    type="button"
                                                    onClick={() => this.doRegister()}
                                                    disabled={this.state.isProcessing ? true : false}
                                                    className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                                                >
                                                    {
                                                        !this.state.isProcessing ? <span>Sign up now</span> : <span>Please wait...</span>
                                                    }
                                                    {
                                                        this.state.isProcessing ?
                                                            <div style={{
                                                                height: 0,
                                                                marginTop: 4,
                                                                marginLeft: 120
                                                            }} className="loader-block">
                                                                <svg
                                                                    style={{
                                                                        width: 30,
                                                                        height: 30,
                                                                        marginBottom: 28,
                                                                        marginRight: 0
                                                                    }}
                                                                    id="loader2"
                                                                    viewBox="0 0 100 100">
                                                                    <circle id="circle-loader2" className="loader-danger" cx="50" cy="50" r="45"></circle>
                                                                </svg>
                                                            </div> : null
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-10">
                                                <p className="text-inverse text-left m-b-0">Thank you.</p>
                                                <p className="text-inverse text-left"><a href="index.html"><b>Back to website</b></a></p>
                                            </div>
                                            <div className="col-md-2">
                                                <img src="src/assets/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* end of col-sm-12 */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container-fluid */}
            </section>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProsp = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProsp)(Register);
