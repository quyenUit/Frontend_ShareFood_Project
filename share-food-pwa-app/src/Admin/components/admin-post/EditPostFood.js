import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostId, updateOrderPost } from "../../../features/posts/postSlice";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../components/constants/apiURL";

const EditPostFood = () => {
  const { post } = useSelector((state) => state.post);
  console.log(post.id);

  const [name, setNameFood] = useState("");
  const [type, setType] = useState("");
  //   const [dateStart, setDateStart] = useState(null);
  //   const [dateEnd, setDateEnd] = useState(null);
  const [location, setLocation] = useState("");
  //   const [image, setImage] = useState(null);
  const [amount, setAmount] = useState(null);
  //   const { postId } = useParams();

  const navigate = useNavigate();
  //   const { userInfo } = useSelector((state) => state.user);

  const UpdatePost = async (_id, event) => {
    event.preventDefault();

    await axios
      // `http://localhost:3001/foods/${post._id}`
      .post(`${apiUrl}/foods/update/${post.id}`, {
        name: name,
        type: type,
        location: location,
        amount: amount,
      })
      .then((response) => {
        if (response) {
          navigate("/admin");
        } else {
          navigate(`update/${post.id}`);
        }
      });
    console.log(_id).catch((e) => {});
  };

  return (
    <section className="section-food">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8} className="col-post-food">
            <h2 className="post-food-title">Cập nhật thực phẩm</h2>
            <form className="post-form" onSubmit={UpdatePost} method="POST">
              <div className="form-group row mb-3">
                <label for="foodname" className="col-sm-2 col-form-label">
                  Tên món ăn:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={post._id}
                    className="form-control"
                    id="foodname"
                    placeholder="Tên món ăn"
                    onChange={(e) => setNameFood(e.target.value)}
                  />
                </div>
              </div>

              <fieldset className="form-group ">
                <div className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Loại thực phẩm:
                  </legend>

                  <div className="col-sm-10">
                    <Row>
                      <Col xs={4}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood1"
                            value="Cơm"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios1">
                            Cơm
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood2"
                            value="Trái cây"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios2">
                            Trái cây
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood3"
                            value="Thực phẩm ăn liền"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios3">
                            Thực phẩm ăn liền
                          </label>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood1"
                            value="Thực phẩm khô"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios1">
                            Thực phẩm khô
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood2"
                            value="Rau"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios2">
                            Rau
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood3"
                            value="Thịt"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios3">
                            Thịt
                          </label>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood1"
                            value="Cá"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios1">
                            Cá
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood2"
                            value="Thực phẩm thiết yếu"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios2">
                            Thực phẩm thiết yếu
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="typefood3"
                            value="Thực phẩm khác"
                            onChange={(e) => setType(e.target.value)}
                          />
                          <label className="form-check-label" for="gridRadios3">
                            Thực phẩm khác
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </fieldset>

              {/* <div className="form-group row mb-3">
                <label for="gettimes" className="col-sm-2 col-form-label">
                  Thời gian cho từ:
                </label>
                <div className="col-sm-10">
                  <input
                    type="time"
                    className="form-control"
                    id="gettime"
                    placeholder="Thời gian cho"
                    onChange={(e) => setDateStart(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label for="gettimes" className="col-sm-2 col-form-label">
                  Đến:
                </label>
                <div className="col-sm-10">
                  <input
                    type="time"
                    className="form-control"
                    id="gettime"
                    placeholder="Thời gian kết thúc"
                    onChange={(e) => setDateEnd(e.target.value)}
                  />
                </div>
              </div> */}

              <div className="form-group row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Địa chỉ:
                </label>
                <div className="col-sm-10">
                  <input
                    type="address"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Địa chỉ"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label for="inputAmount" className="col-sm-2 col-form-label">
                  Số lượng
                </label>
                <div className="col-sm-2">
                  <input
                    type="number"
                    className="form-control"
                    id="inputAmount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="form-group row mb-3">
            <label for="exampleFormControlFile1">Chọn hình ảnh</label>
            <input
              type="file"
              onChange={handleChange}
              class="form-control-file"
              id="exampleFormControlFile1"
            />
            <img src={image} />
          </div> */}
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Cập nhật
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EditPostFood;
