import React from 'react';
import '../../styles/Store.css'
import CardFoodList from './CardFoodList';
import { Link } from '@mui/material';
import {FaArrowRight}  from 'react-icons/fa'
const Store = () => {
  return (
    <div className='body-background'>
      <div className='store-food col-lg-12'>
          <div className='d-flex justify-content-center near-food'>
              <h2>GẦN ĐÂY</h2>
          </div>
          <div className='d-flex justify-content-center near-food-text'>
              <p>Những món ăn gần đây mà bạn cần tìm kiếm</p>
          </div>
      </div>
      <CardFoodList />
      <div className="go-to-list-food col-lg-12 justify-content-end d-flex">
        <Link>Xem thêm <FaArrowRight /></Link>
      </div>
      <div className='store-food col-lg-12'>
          <div className='d-flex justify-content-center near-food'>
              <h3>GỢI Ý</h3>
          </div>
          <div className='d-flex justify-content-center'>
              <p>Những món ăn được sẻ chia nhiều nhất</p>
          </div>
      </div>
    </div>
  )
}

export default Store;