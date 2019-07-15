import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import NavBar from './NavBar';

class NewPackages extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="dt-content">
                <NavBar title={"New Package"} />
                <div className="ant-row">
                    <div className="ant-col-xs-16 ant-col-sm-16 ant-col-md-16 ant-col-lg-16 ant-col-xl-16">
                        <div className="ant-card gx-card ant-card-bordered ant-card-wider-padding ant-card-padding-transition">
                            {/* <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div class="ant-card-head-title">Add Categories</div>
                                </div>
                            </div> */}
                            <div className="ant-card-body">
                                <div className="ant-card-body">
                                    <form className="ant-form ant-form-horizontal">
                                        <div className="ant-row ant-form-item">
                                            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                                <label>PACKAGE NAME</label>
                                                <div className="ant-form-item-control has-success">
                                                    <span className="ant-form-item-children">
                                                        <input id="categoryName" type="text" className="ant-input textBorder" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="summernote">
                                            <h1>Lorem Ipsum is simply</h1>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ant-col-xs-8 ant-col-sm-8 ant-col-md-8 ant-col-lg-8 ant-col-xl-8">
                        <div className="ant-row">
                            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                <div className="sideCard">
                                    <span>FEATURED IMAGE</span>
                                    <hr />
                                    <button
                                        onClick={() => this.props.history.push('/new-packages')}
                                        type="button"
                                        class="ant-btn ant-btn-primary ant-btn-background-ghost ant-col-xs-24"
                                    >
                                        <span>Add Featured Image</span>
                                    </button>
                                </div>

                                <div className="sideCard">
                                    <span>SERVICE CATEGORY</span>
                                    <hr />
                                    <select className="form-control">
                                        <option>Insurance</option>
                                    </select>
                                </div>

                                <div className="sideCard">
                                    <span>SERVICE PROVIDER</span>
                                    <hr />
                                    <select className="form-control">
                                        <option>FBN Insurance</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewPackages);