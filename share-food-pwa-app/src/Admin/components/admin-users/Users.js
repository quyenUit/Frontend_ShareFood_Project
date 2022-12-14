import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./Users.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserStatus } from "../../../features/users/userSlice";
import { setDefaultHandler } from "workbox-routing";
import { Link } from "react-router-dom";
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users/list");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  console.log("data", data);

  const deleteUser = async (_id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that user record")
    ) {
      const response = await axios.delete(
        `http://localhost:3001/users/delete/${_id}`
      );
      if (response.status === 200) {
        toast.success(response.setData);
        getUsers();
      }
    }
  };

  return (
    <section className="ad-users">
      <Container>
        <div className="mt-4">
          <h3 className="User-List">User List</h3>

          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">CreateDate</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.createdate}</td>
                      <td>
                        <Link to={`/admin/users/update/${user._id}`}>
                          <button className="btn btn-link">Edit</button>
                        </Link>
                        <button
                          className="btn btn-link"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </td>
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

export default Users;
