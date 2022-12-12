import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { getPostId } from '../../features/posts/postSlice'
import TimeAgo from './TimeAgo'

const NotificationNavbarItem = ({item}) => {
    const post = useSelector((state) => getPostId(state, item.postId))
    return (
        item.status === "Success"?
        <Dropdown.Item className='notification-item-navbar'>
            <Link>Yêu cầu xin món "{post[0].name}" của bạn đã được duyệt</Link>
            <TimeAgo timestamp={item.orderDate} />
        </Dropdown.Item>
        : item.status === "Failed"?
        <Dropdown.Item className='notification-item-navbar'>
            <Link>Yêu cầu xin món ăn của bạn không được duyệt</Link>
        </Dropdown.Item>
        : <DropdownItem className='notification-item-navbar'>
            <Link>Yêu cầu của bạn đang duyệt</Link>
        </DropdownItem>
  )
}

export default NotificationNavbarItem