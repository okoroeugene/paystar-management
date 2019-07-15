import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class PageHeader extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    render() {
        return (
            <div className="col-md-7 col-4 align-self-center">
                <div className="d-flex m-t-10 justify-content-end">
                    <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                        <div className="chart-text m-r-10">
                            <h6 className="m-b-0"><small>THIS MONTH</small></h6>
                            <h4 className="m-t-0 text-info">$58,356</h4>
                        </div>
                        <div className="spark-chart">
                            <div id="monthchart"></div>
                        </div>
                    </div>
                    <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                        <div className="chart-text m-r-10">
                            <h6 className="m-b-0"><small>LAST MONTH</small></h6>
                            <h4 className="m-t-0 text-primary">$48,356</h4>
                        </div>
                        <div className="spark-chart">
                            <div id="lastmonthchart"></div>
                        </div>
                    </div>
                    <div className="">
                        <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i
                            className="ti-settings text-white"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;