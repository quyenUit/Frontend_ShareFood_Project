import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postList } from '../../features/posts/postList';
import CardFood from './CardFood'
import { Row } from 'react-bootstrap';

const CardFoodList = () => {
    const {post} = useSelector((state) => state.post);
    return (
        <div className='d-flex'>
            <Row className='row-food-container'>
            {
                post.map((item) => (
                    <div className='col-lg-4'>
                        <CardFood post={item}/>
                    </div>
                ))
            }
            </Row>
        </div>
    )
}

export default CardFoodList