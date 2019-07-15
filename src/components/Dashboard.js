import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import NavBar from './NavBar';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        console.log(this.props.user.current);
    }
    render() {
        return (
            <div className="dt-content">
                <NavBar title={"Home"} />
                <div className="ant-row">
                    <div className="ant-col-24">
                        <div className="alert alert-success">
                            <span>You have no pending notifications</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
