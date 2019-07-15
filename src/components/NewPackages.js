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
                                                <label>COMPANY</label>
                                                <div className="ant-form-item-control has-success">
                                                    <span className="ant-form-item-children">
                                                        <input id="categoryName" type="text" className="ant-input textBorder" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="summernote">
                                            <h1>Lorem Ipsum is simply</h1>
                                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the
                      industry's</strong> standard dummy text ever since the 1500s, when an unknown printer took a
                                                                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                                                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with</p>
                                            <ul>
                                                <li>Remaining essentially unchanged</li>
                                                <li>Make a type specimen book</li>
                                                <li>Unknown printer</li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ant-col-xs-8 ant-col-sm-8 ant-col-md-8 ant-col-lg-8 ant-col-xl-8">
                        <div className="">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div class="ant-card-head-title">Finance Providers</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPackages);