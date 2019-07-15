import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }
    render() {
        return (
            <aside id="main-sidebar" className="dt-sidebar" style={{ height: '100%' }}>
                <div className="dt-sidebar__container">
                    <div className="logo0">
                        <h1 style={{ color: '#EAF0F3' }}>paystar</h1>
                    </div>
                    <ul className="dt-side-nav">
                        <li className="dt-side-nav__item">
                            <Link to={"/dashboard"} className="dt-side-nav__link">
                                <i className="icon icon-home icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Home</span>
                            </Link>
                        </li>
                        <li className="dt-side-nav__item dt-side-nav__header">
                            <span className="dt-side-nav__text">FINANCE MANAGEMENT</span>
                        </li>
                        <li className="dt-side-nav__item">
                            <Link to={"/categories"} className="dt-side-nav__link">
                                <i className="icon icon-widgets icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Categories</span>
                            </Link>
                            <Link to={"/providers"} className="dt-side-nav__link">
                                <i className="icon icon-orders icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Providers</span>
                            </Link>
                            <Link to={"/packages"} className="dt-side-nav__link">
                                <i className="icon icon-callout icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Packages</span>
                            </Link>
                        </li>
                        <li className="dt-side-nav__item dt-side-nav__header">
                            <span className="dt-side-nav__text">USER MANAGEMENT</span>
                        </li>
                        <li className="dt-side-nav__item">
                            <Link to={"/dashboard"} className="dt-side-nav__link">
                                <i className="icon icon-user-o icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Finance Agents</span>
                            </Link>
                            <Link to={"/dashboard"} className="dt-side-nav__link">
                                <i className="icon icon-wall icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Clients</span>
                            </Link>
                        </li>
                        <li className="dt-side-nav__item dt-side-nav__header">
                            <span className="dt-side-nav__text">TRANSACTIONS</span>
                        </li>
                        <li className="dt-side-nav__item">
                            <Link to={"/dashboard"} className="dt-side-nav__link">
                                <i className="icon icon-all-contacts icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Transactions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
