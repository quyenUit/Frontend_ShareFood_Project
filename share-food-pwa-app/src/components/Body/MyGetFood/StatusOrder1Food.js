import React from 'react'
import { useSelector } from 'react-redux'
import { getPostId } from '../../../features/posts/postSlice'
import { Col, Row } from 'react-bootstrap'
import "../../../styles/index.css"
const StatusOrder1Food = ({item}) => {
    const post = useSelector((state) => getPostId(state, item.postId))

    return (
        <Row className="d-flex justify-content-center status-order-food">
            <Col lg="2" className='orderstatus-image d-flex justify-content-end'>
                <img src={post[0].file}/>
            </Col>
            <Col lg="4">
                <div className='orderstatus-description'>
                    <p><strong>Tên món ăn:</strong> {post[0].name}</p>
                    <p><strong>Số lượng:</strong> {item.orderNumber}</p>
                    <p><strong>Note:</strong> {item.note}</p>
                    <div className='d-flex'>
                        <p><strong>Note:</strong></p>
                        {
                            item.status==="Success"?
                            <h6 className='status-accpeted'>Đã được duyệt</h6>
                            :<h6 className='status-unaccpeted'>Không được duyệt</h6>

                        }
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default StatusOrder1Food