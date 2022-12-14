import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderManage } from "../../features/orders/orderSlice";
import OrderFood from "./OrderFood";
import Table from "react-bootstrap/Table";
import { fetchOrders } from "../../features/orders/orderAction";
import { useEffect } from "react";
const OrderList = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  return (
    <div className="manage-order">
      <h3>Danh sách yêu cầu</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Phone</th>
            <th>Địa chỉ</th>
            <th>Thời gian</th>
            <th>Món ăn</th>
            <th>Số lượng</th>
            <th>Duyệt</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <OrderFood idx={idx} order={order} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
