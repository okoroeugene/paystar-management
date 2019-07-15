import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import NavBar from './NavBar';

class Packages extends Component {
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
                <NavBar title={"Providers"} />
                <button onClick={() => this.props.history.push('/new-packages')} type="button" class="ant-btn ant-btn-danger ant-btn-background-ghost"><span>Add New</span></button>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="dt-entry__header">
                            <span className="ant-input-search ant-input-affix-wrapper" style={{ width: 200, marginBottom: -2 }}>
                                <input placeholder="input search text" style={{ height: 38 }} className="ant-input" type="text" defaultValue />
                                <span className="ant-input-suffix"><i class="icon icon-search icon-lg"></i></span>
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span style={{ padding: 7 }}>Filter:</span>
                                {/* <input type="text" className="form-control" placeholder="Search" /> */}
                                <select className="form-control">
                                    <option>Categories</option>
                                </select>
                                <select className="form-control">
                                    <option>Providers</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span>Viewing <b>1-20</b> of <b>36</b></span>
                            </div>
                        </div>
                        <div className="dt-card">
                            <div className="dt-card__body">
                                <div className="table-responsive">
                                    <table id="data-table" className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Rendering engine</th>
                                                <th>Browser</th>
                                                <th>Platform(s)</th>
                                                <th>Engine version</th>
                                                <th>CSS grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="gradeX">
                                                <td>Trident</td>
                                                <td>Internet Explorer 4.0</td>
                                                <td>Win 95+</td>
                                                <td>4</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.0</td>
                                                <td>Win 95+</td>
                                                <td>5</td>
                                                <td>C</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Rendering engine</th>
                                                <th>Browser</th>
                                                <th>Platform(s)</th>
                                                <th>Engine version</th>
                                                <th>CSS grade</th>
                                            </tr>
                                        </tfoot>
                                    </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Packages);