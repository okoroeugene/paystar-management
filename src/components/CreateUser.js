import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import { NotificationManager } from 'react-notifications';

class CreateUsers extends Component {
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
        if (nextProps.register.created) {
            NotificationManager.success('Account has been created successfully!', 'Success');
            setTimeout(() => {
                window.location.href = '/users';
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
            return NotificationManager.error('Invalid credentials!', 'Error');
        } else if (password != rePassword) {
            this.setState({ isProcessing: false })
            return NotificationManager.error('Password and confirm password does not match!', 'Error');
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
            <div className="dt-content">
                <div className="ant-col-12" style={{ margin: '0 auto' }}>
                    <div className="ant-card gx-card ant-card-bordered ant-card-wider-padding ant-card-padding-transition">
                        <div className="ant-card-head">
                            <div className="ant-card-head-wrapper">
                                <div className="ant-card-head-title">Create User</div>
                            </div>
                        </div>

                        <div className="ant-card-body">
                            <form ref={(e) => this.userRef = e} className="ant-form ant-form-horizontal">
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="username" ref={'username'} placeholder="username" type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="email" ref={'email'} placeholder="email address" type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <select ref={"role"} name="select" className="form-control fill">
                                            <option value="opt1">--- select user role ---</option>
                                            <option value="superAdmin">Super Admin</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password-1">Password</label>
                                    <input ref={'password'} type="password" className="form-control" id="password-1" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password-1">RePassword</label>
                                    <input ref={'rePassword'} type="password" className="form-control" id="password-1" placeholder="RePassword" />
                                </div>

                                <div className="ant-row ant-form-item">
                                </div>
                                <div className="form-group text-center">
                                    {
                                        this.state.isProcessing ? <button type="button" className="ant-btn ant-btn-primary ant-btn-loading" ant-click-animating-without-extra-node="false">
                                            <i aria-label="icon: loading" className="anticon anticon-loading">
                                                <svg viewBox="0 0 1024 1024" className="anticon-spin" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                                                </svg>
                                            </i>
                                            <span>Processing...</span>
                                        </button> : <button
                                            onClick={() => this.doRegister()}
                                            type="button"
                                            className="btn btn-primary">Create</button>
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
    user: state.user,
    register: state.register
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateUsers);
