import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import NavBar from './NavBar';

class Categories extends Component {
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
                <NavBar title={"Categories"} />
                <div className="ant-row">
                    <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-12">
                        <div className="ant-card gx-card ant-card-bordered ant-card-wider-padding ant-card-padding-transition">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div class="ant-card-head-title">Add Categories</div>
                                </div>
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-card-body">
                                    <form className="ant-form ant-form-horizontal">
                                        <div className="ant-row ant-form-item">
                                            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                                <label>CATEGORY NAME</label>
                                                <div className="ant-form-item-control has-success">
                                                    <span className="ant-form-item-children">
                                                        <input id="categoryName" type="text" className="ant-input textBorder" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ant-row ant-form-item">
                                            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                                <label>DESCRIPTION (OPTIONAL)</label>
                                                <div className="ant-form-item-control has-success">
                                                    <span className="ant-form-item-children">
                                                        <textarea rows="8" id="categoryName" type="text" className="ant-input textBorder" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ant-row ant-form-item">
                                            <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
                                                <div className="ant-form-item-control"><span className="ant-form-item-children">
                                                    <button type="submit" className="ant-btn ant-btn-orange"><span>Add Category</span></button>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-12">
                        <div className="">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div class="ant-card-head-title">Category List</div>
                                </div>
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-row">
                                    <div className="ant-form-item-control-wrapper ant-col-xs-12 ant-col-sm-12">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="ant-row" style={{ marginTop: 20 }}>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24">
                                        <div className="catList">
                                            <div>
                                                <span>Collective Investment</span>
                                            </div>
                                            <div style={{ padding: 20 }}>
                                                <a>Edit</a>
                                            </div>
                                        </div>

                                        <div className="catList">
                                            <div>
                                                <span>Commercial Credit</span>
                                            </div>
                                            <div style={{ padding: 20 }}>
                                                <a>Edit</a>
                                            </div>
                                        </div>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
