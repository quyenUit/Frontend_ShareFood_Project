import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postList } from "../../features/posts/postList";
import CardFood from "./CardFood";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPost } from "../../features/posts/postSlice";

const CardFoodList = () => {
  const { post } = useSelector((state) => state.post);

  return (
    <div className="d-flex">
      <Row className="row-food-container">
        {post.map((item, idx) => {
          if (idx < 30) {
            return (
              <div className="col-lg-4">
                <CardFood post={item} />
              </div>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default CardFoodList;
