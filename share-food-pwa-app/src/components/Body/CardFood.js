import React from "react";
import { Link } from "react-router-dom";
import cardFood from "../../images/cardfood-1.jpg";
import search from "../../images/search.png";

function CardFood({post}) {
  return (
    <div id="curve" class="card">
      <img src={post.file}></img>
      <div className="footer">
        <div className="connections">
          <div className="connection">
            <Link to={`/post/${post._id}`}>
              <Link to={`/post/${post._id}`}>
                <img style={{ width: "2.2rem" }} src={search}></img>
              </Link>
            </Link>
          </div>
        </div>
        <div>
          <Link to={`/post/${post._id}`}>
            <svg id="curve">
              <path
                id="p"
                d="M0,200 Q80,100 400,200 V150 H0 V50"
                transform="translate(0 300)"
              />
              <rect
                id="dummyRect"
                x="0"
                y="0"
                height="450"
                width="400"
                fill="transparent"
              />
              <animate
                attributeName="d"
                to="M0,50 Q80,100 400,50 V150 H0 V50"
                fill="freeze"
                begin="dummyRect.mouseover"
                end="dummyRect.mouseout"
                dur="0.1s"
                id="bounce1"
              />
              <animate
                attributeName="d"
                to="M0,50 Q80,0 400,50 V150 H0 V50"
                fill="freeze"
                begin="bounce1.end"
                end="dummyRect.mouseout"
                dur="0.15s"
                id="bounce2"
              />
              <animate
                attributeName="d"
                to="M0,50 Q80,80 400,50 V150 H0 V50"
                fill="freeze"
                begin="bounce2.end"
                end="dummyRect.mouseout"
                dur="0.15s"
                id="bounce3"
              />
              <animate
                attributeName="d"
                to="M0,50 Q80,45 400,50 V150 H0 V50"
                fill="freeze"
                begin="bounce3.end"
                end="dummyRect.mouseout"
                dur="0.1s"
                id="bounce4"
              />
              <animate
                attributeName="d"
                to="M0,50 Q80,50 400,50 V150 H0 V50"
                fill="freeze"
                begin="bounce4.end"
                end="dummyRect.mouseout"
                dur="0.05s"
                id="bounce5"
              />
              <animate
                attributeName="d"
                to="M0,200 Q80,100 400,200 V150 H0 V50"
                fill="freeze"
                begin="dummyRect.mouseout"
                dur="0.15s"
                id="bounceOut"
              />
            </svg>
          </Link>
        </div>
        <div className="info">
          <div className="name">{post.name}</div>
          <div className="job">{post.location}</div>
        </div>
      </div>
      <div className="card-blur"></div>
    </div>
  );
}

export default CardFood;
