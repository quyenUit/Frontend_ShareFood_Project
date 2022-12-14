import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Orders.css";

const Orders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const response = await axios.get("http://localhost:3001/orders");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  return (
    <section className="ad-orders">
      <Container>
        <div className="mt-4">
          <h3 className="Order-List">Order List</h3>

          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">userId</th>
                <th scope="col">userPostEmail</th>
                <th scope="col">postId</th>
                <th scope="col">orderNumber</th>
                <th scope="col">note</th>
                <th scope="col">status</th>
                <th scope="col">orderDate</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((order, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{order.userId}</td>
                      <td>{order.userPostEmail}</td>
                      <td>{order.postId}</td>
                      <td>{order.orderNumber}</td>
                      <td>{order.note}</td>
                      <td>{order.status}</td>
                      <td>{order.orderDate}</td>
                      {/* <td>
                    <Link to={`/admin/users/update/${user._id}`}>
                      <button className="btn btn-link">Edit</button>
                    </Link>
                    <button
                      className="btn btn-link"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default Orders;
