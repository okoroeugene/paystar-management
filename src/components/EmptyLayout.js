import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import SideBar from './SideBar';

const EmptyLayout = props => (
    <div>
        {props.children}
    </div>
)

export default EmptyLayout;
