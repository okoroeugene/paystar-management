import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    logout() {
        this.props.logout();
    }
    render() {
        return (
            <div>
                {/* <div className="dt-header__container">
                    <div className="dt-brand">
                        <div className="dt-brand__tool" data-toggle="main-sidebar">
                            <i className="icon icon-xl icon-menu-fold d-none d-lg-inline-block" />
                            <i className="icon icon-xl icon-menu d-lg-none" />
                        </div>
                        <span className="dt-brand__logo">
                            <a className="dt-brand__logo-link" href="index.html">
                                <img style={{ width: 135 }} className="img-fluid" src="src/imgs/NEW_HEADERELGC.png" alt="Theme-Logo" />
                            </a>
                        </span>
                    </div>
                </div> */}
                <div className="ant-row">
                    <div className="ant-col-24">
                        <div style={{ float: 'left' }}>
                            <h1 style={{ color: '#000000' }}>{this.props.title}</h1>
                        </div>
                        <div className="hello0">
                            <h4 style={{ color: '#000000', marginTop: 4 }}>Hello, Odogwu</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);