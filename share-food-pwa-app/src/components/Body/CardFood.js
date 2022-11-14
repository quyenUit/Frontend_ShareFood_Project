import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import cardFood from "../../images/cardfood-1.jpg";
import cardFood1 from "../../images/cardfood-2.jpg";
import cardFood2 from "../../images/cardfood-3.jpg";
import cardFood3 from "../../images/cardfood-4.jpg";
import search from "../../images/search.png";

function CardFood() {
  return (
    <div className="d-flex card-store-food">
      <div id="curve" class="card col-lg-3">
        <img src={cardFood}></img>
        <div className="footer">
          <div className="connections">
            <div className="connection">
              <Link to="/food_detail">
                <Link to="/food_detail">
                  <img style={{ width: "2.2rem" }} src={search}></img>
                </Link>
              </Link>
            </div>
          </div>
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
          <div className="info">
            <div className="name">Bánh mì</div>
            <div className="job">Quán bánh mì 24 (Cách đây 2km)</div>
          </div>
        </div>
        <div className="card-blur"></div>
      </div>
      <div id="curve" className="card col-lg-3">
        <img src={cardFood1}></img>
        <div className="footer">
          <div className="connections">
            <div className="connection">
              <a href="/">
                <a>
                  <img style={{ width: "2.2rem" }} src={search}></img>
                </a>
              </a>
            </div>
          </div>
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
          <div className="info">
            <div className="name">Bún chả</div>
            <div className="job">Quán Bún chả Hà Nội (cách đây 1km)</div>
          </div>
        </div>
        <div className="card-blur"></div>
      </div>
      <div id="curve" className="card col-lg-3">
        <img src={cardFood2}></img>
        <div className="footer">
          <div className="connections">
            <div className="connection">
              <a href="/">
                <a>
                  <img style={{ width: "2.2rem" }} src={search}></img>
                </a>
              </a>
            </div>
          </div>
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
          <div className="info">
            <div className="name">Bún bò Huế</div>
            <div className="job">Quán sông Hương (cách đây 3km)</div>
          </div>
        </div>
        <div className="card-blur"></div>
      </div>
      <div id="curve" className="card col-lg-3">
        <img src={cardFood3}></img>
        <div className="footer">
          <div className="connections">
            <div className="connection">
              <a href="/">
                <a>
                  <img style={{ width: "2.2rem" }} src={search}></img>
                </a>
              </a>
            </div>
          </div>
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
          <div className="info">
            <div className="name">Bún riêu</div>
            <div className="job">Quán Hồng Hạnh (cách đây 2.5km)</div>
          </div>
        </div>
        <div className="card-blur"></div>
      </div>
    </div>
  );
}

export default CardFood;
