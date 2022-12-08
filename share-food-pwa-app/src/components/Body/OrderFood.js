import React from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../../features/allUsers/allUserSlice";
import { getPostId } from "../../features/posts/postSlice";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import { apiUrl } from "../constants/apiURL";
import { useNotification } from "use-toast-notification";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
const OrderFood = ({ idx, order }) => {
  const user = useSelector((state) => getUserById(state, order.userId));
  const date = new Date(order.orderDate).toString();
  const post = useSelector((state) => getPostId(state, order.postId));
  const notification = useNotification();
  const navigate = useNavigate();
  const Accept = async () => {
    const acceptOrder = await axios.put(`${apiUrl}/post/update/${post._id}`, {
      id: post._id,
      amount: Number(post.amount - order.orderNumber),
      orderId: order._id,
    });
    if (acceptOrder.data.success) {
      notification.show({
        message: "Bạn đã duyệt thành công",
        title: "Thành công",
        variant: "success",
      });
      navigate("/myfood");
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const Unaccept = async () => {
    const deleteOrder = await axios.delete(
      `${apiUrl}/post/update/${order._id}`
    );

    if (deleteOrder.data.success) {
      notification.show({
        message: "Bạn đã duyệt thành công",
        title: "Thành công",
        variant: "success",
      });
      navigate("/myfood");
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{user[0].username}</td>
        <td>{user[0].phone}</td>
        <td>{user[0].address}</td>
        <td>{date.substring(0, 25)}</td>
        <td>{post.name}</td>
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
    </>
  );
};

export default OrderFood;
