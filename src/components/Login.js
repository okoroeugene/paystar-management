import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.current && nextProps.user.current != this.props.user.current) {
            const path = this.props.location.state ? this.props.location.state.from.pathname : "/dashboard";
            // this.props.history.push(path);
            window.location.href = '/dashboard';
        }
        if (nextProps.user.error && nextProps.user.error != this.props.user.error) {
            toastr.error(`${nextProps.user.error}`, 'Error:');
            this.setState({ isProcessing: false });
        }
    }
    doLogin() {
        this.setState({ isProcessing: true });
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        if (!email || !password) {
            this.setState({ isProcessing: false })
            return toastr.error("Invalid login credentials!");
        } else {
            return this.props.doLogin({
                email: email,
                password: password,
            })
        }
    }
    render() {
        return (
            <div className="dt-content">
                <img style={{ width: 200, display: 'block', margin: '20px auto' }} className="img-fluid" src="src/imgs/NEW_HEADERELGC.png" alt="Theme-Logo" />
                <div className="dt-login--container">
                    <div className="dt-login__content-wrapper">
                        <div className="dt-login__content-inner">
                            <div className="text-center mb-8">
                                <h1>Sign In</h1>
                            </div>
                            <form action="index.html">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="email-1">Email address</label>
                                    <input ref={'email'} type="email" className="form-control" id="email-1" aria-describedby="email-1" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password-1">Password</label>
                                    <input ref={'password'} type="password" className="form-control" id="password-1" placeholder="Password" />
                                </div>
                                <div className="custom-control custom-checkbox mt-9 mb-8">
                                    <input className="custom-control-input" type="checkbox" id="checkbox-1" defaultChecked="checked" />
                                    <label className="custom-control-label" htmlFor="checkbox-1">Remember me <a href="page-forgot-password.html">Forgot password</a></label>
                                </div>
                                <div className="form-group text-center">
                                    {
                                        this.state.isProcessing ? <button type="button" className="ant-btn ant-btn-primary ant-btn-loading" ant-click-animating-without-extra-node="false">
                                            <i aria-label="icon: loading" className="anticon anticon-loading">
                                                <svg viewBox="0 0 1024 1024" className="anticon-spin" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                                                </svg>
                                            </i>
                                            <span>Logging in...</span>
                                        </button> : <button
                                            onClick={() => this.doLogin()}
                                            type="submit"
                                            className="btn btn-primary">Log in</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
