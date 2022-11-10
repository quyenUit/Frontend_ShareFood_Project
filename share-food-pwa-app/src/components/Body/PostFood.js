import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/PostFood.css";

const PostFood = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <h2 className="post-food-title">Đăng thực phẩm</h2>
              <form className="post-form">
                <div className="form-group row mb-3">
                  <label for="foodname" className="col-sm-2 col-form-label">
                    Tên món ăn
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="foodname"
                      placeholder="Tên món ăn"
                    />
                  </div>
                </div>

                <fieldset className="form-group ">
                  <div className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Loại thực phẩm
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
                              value="option1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios1"
                            >
                              Cơm
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios2"
                            >
                              Trái cây
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood3"
                              value="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios3"
                            >
                              Phở
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
                              value="option1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios1"
                            >
                              Thực phẩm ăn liền
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios2"
                            >
                              Thực phẩm khô
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood3"
                              value="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios3"
                            >
                              Rau
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
                              value="option1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios1"
                            >
                              Thịt
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios2"
                            >
                              Cá
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="typefood3"
                              value="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios3"
                            >
                              Thực phẩm thiết yếu
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </fieldset>

                <div className="form-group row mb-3">
                  <label for="gettimes" className="col-sm-2 col-form-label">
                    Thời gian cho từ
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="time"
                      className="form-control"
                      id="gettime"
                      placeholder="Thời gian cho"
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label for="gettimes" className="col-sm-2 col-form-label">
                    Đến
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="time"
                      className="form-control"
                      id="gettime"
                      placeholder="Thời gian kết thúc"
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label
                    for="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Địa chỉ
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="address"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Địa chỉ"
                    />
                  </div>
                </div>

                {/* <div className="form-group row">
                  <div className="col-sm-2">Checkbox</div>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" for="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </div> */}
                <div class="form-group row mb-3">
                  <label for="exampleFormControlFile1">Chọn hình ảnh</label>
                  <input
                    type="file"
                    onChange={handleChange}
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                  <img src={file} />
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PostFood;
