import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import SideBar from './SideBar';

const MainLayout = props => (
    <div className="dt-root">
        {/* <NavBar /> */}
        <main className="dt-main">
            <SideBar />
            <div className="dt-content-wrapper">
                {props.children}
            </div>
        </main>
    </div>
)

export default MainLayout;
