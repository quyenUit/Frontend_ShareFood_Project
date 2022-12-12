import React from 'react'
import { Col, Dropdown, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import NotificationNavbarItem from './NotificationNavbarItem';

const NotificationNavbar = ({needOrders}) => {

    return (
        <Dropdown.Menu className="dropdown-custom">
        {
            needOrders.map((item) => (
                <NotificationNavbarItem item={item} />
            ))
        }
        </Dropdown.Menu>
    )
}

export default NotificationNavbar