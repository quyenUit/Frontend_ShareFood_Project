import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/PostFood.css";
import { useDispatch, useSelector } from "react-redux";
import { postUpload } from "../../features/posts/postUpload";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPostStatus } from "../../features/posts/postSlice";
import { resetStatus } from "../../features/posts/postSlice";
const PostFood = () => {

  const [nameFood, setNameFood] = useState('');
  const [type, setType] = useState('');
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const {userInfo} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postStatus = useSelector(getPostStatus);

  function handleChange(e) {
    const file = e.target.files[0];
    setFileToBase(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }
  
  
  useEffect(() => {
    if (postStatus === 'succeeded') {
      dispatch(resetStatus())
      navigate('/')
    }
  }, [navigate, postStatus])

  const post = {
    name: nameFood,
    type: type,
    dateStart: dateStart,
    dateEnd: dateEnd,
    location: location,
    file: image,
    email: userInfo.email
  }


  const UploadPost = async(event) =>{
    event.preventDefault();
    dispatch(postUpload(post));
  }
  

  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8} className="col-post-food">
              <h2 className="post-food-title">Đăng thực phẩm</h2>
              <form className="post-form" onSubmit={UploadPost}>
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
                      onChange={(e) => setNameFood(e.target.value)}
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
                              value="Cơm"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Trái cây"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Phở"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Thực phẩm ăn liền"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Thực phẩm khô"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Rau"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Thịt"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Cá"
                              onChange={(e) => setType(e.target.value)}
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
                              value="Thực phẩm thiết yếu"
                              onChange={(e) => setType(e.target.value)}
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
                      onChange={(e) => setDateStart(e.target.value)}
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
                      onChange={(e) => setDateEnd(e.target.value)}
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
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label for="exampleFormControlFile1">Chọn hình ảnh</label>
                  <input
                    type="file"
                    onChange={handleChange}
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                  <img src={image} />
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Tải lên
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
