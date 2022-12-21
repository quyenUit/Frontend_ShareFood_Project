import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../features/allUsers/allUserSlice";
import { getPostId } from "../../features/posts/postSlice";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import { apiUrl } from "../constants/apiURL";
import { useNotification } from "use-toast-notification";
import { fetchOrders } from "../../features/orders/orderAction";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
const OrderFood = ({ idx, order }) => {
  const { userInfo } = useSelector((state) => state.user);
  const user = useSelector((state) => getUserById(state, order.userId));
  const date = new Date(order.orderDate).toString();
  const post = useSelector((state) => getPostId(state, order.postId));
  const notification = useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Accept = async () => {
    const acceptOrder = await axios.put(`${apiUrl}/post/update/${post[0]._id}`, {
      id: post[0]._id,
      amount: Number(post[0].amount - order.orderNumber),
      orderId: order._id,
      status: 'Success'
    });
    if (acceptOrder.data.success) {
      notification.show({
        message: "Bạn đã duyệt thành công",
        title: "Thành công",
        variant: "success",
      });
    }
    dispatch(fetchOrders(userInfo.email));
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const Unaccept = async () => {
    const acceptOrder = await axios.put(`${apiUrl}/post/update/${post[0]._id}`, {
      id: post[0]._id,
      orderId: order._id,
      status: 'Failed'
    });

    dispatch(fetchOrders(userInfo.email));
    if (acceptOrder.data.success) {
      notification.show({
        message: "Bạn đã duyệt thành công",
        title: "Thành công",
        variant: "success",
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
        order.status === "Pending"?
          <tr>
            <td>{user[0].username}</td>
            <td>{user[0].phone}</td>
            <td>{user[0].address}</td>
            <td>{date.substring(0, 25)}</td>
            <td>{post[0].name}</td>
            <td>{order.orderNumber}</td>
            <td>
              <Button
                className="button-approval button-approval-accept"
                onClick={Accept}
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                className="button-approval button-approval-unaccept btn-danger"
                onClick={Unaccept}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </td>
          </tr>
        :<></>

  );
};

export default OrderFood;
