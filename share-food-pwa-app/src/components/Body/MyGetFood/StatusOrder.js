import React from 'react'
import { useSelector } from 'react-redux'
import { getPostId } from '../../../features/posts/postSlice'
import StatusOrder1Food from './StatusOrder1Food'
const StatusOrder = () => {
    const {needOrders} = useSelector((state) => state.order)
    
    return (
            needOrders.map((item) => (
                <StatusOrder1Food item={item} />
            ))    
    )
}

export default StatusOrder