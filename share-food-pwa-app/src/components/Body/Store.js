import React from 'react';
import '../../styles/Store.css'

const Store = () => {
  return (
    <div className='store-food col-lg-12'>
        <div className='d-flex justify-content-center near-food'>
            <h3>GẦN ĐÂY</h3>
        </div>
        <div className='d-flex justify-content-center'>
            <p>Những món ăn gần đây mà bạn cần tìm kiếm</p>
        </div>
    </div>
  )
}

export default Store;