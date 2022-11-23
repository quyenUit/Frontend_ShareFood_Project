import React from "react";
import { Link } from "react-router-dom";
import CardFood from "../components/Body/CardFood.js";
import { getUserPostId } from "../features/posts/postSlice.js";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { useMemo, useState } from "react";
import Pagination from "../components/Body/Pagination.js";


const MyFood = () => {
  let PageSize = 6;
  const {userInfo} = useSelector((state) => state.user)
  const postUserId = useSelector((state) => getUserPostId(state, userInfo.email))

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return postUserId.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="uploadpost-button">
        <Link to="/uploadpost">Đăng Tin</Link>
      </div>
      <div className="myfood-item">
        <Row>
        {
          currentTableData.map((item) => (
            <div className='col-lg-4'>
              <CardFood post={item}/>
            </div>
          ))
        }
        </Row>

          <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={postUserId.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
          />
      </div>
    </>
  );
};

export default MyFood;
