import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import "./PostFood.css";
import { apiUrl } from "../../../components/constants/apiURL";

const PostFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const response = await axios.get(
      // "http://localhost:3001/foods/list"
      `${apiUrl}/foods/list`
    );
    if (response.status === 200) {
      setFoods(response.data);
    }
  };

  console.log("data", foods);

  const deletePostFood = async (_id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that post record")
    ) {
      const response = await axios.delete(
        //`http://localhost:3001/foods/delete/${_id}`
        `${apiUrl}/foods/delete/${_id}`
      );
      if (response.status === 200) {
        toast.success(response.setFoods);
        getFoods();
      }
    }
  };

  return (
    <section className="ad-post-food">
      <Container>
        <div className="mt-4">
          <h3 className="Post-Food-List">Post Food List</h3>

          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Location</th>
                <th scope="col">Email</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{food.name}</td>
                    <td>
                      <img
                        src={food.file}
                        alt="img"
                        width="50px"
                        height="50px"
                      />
                    </td>
                    <td>{food.location}</td>
                    <td>{food.email}</td>
                    <td>{food.amount}</td>
                    <td>
                      {/* <Link to={`/admin/posts/update/${food._id}`}>
                        <button className="btn btn-link">Edit</button>
                      </Link> */}
                      <button
                        className="btn btn-link"
                        onClick={() => deletePostFood(food._id)}
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

export default PostFoods;
