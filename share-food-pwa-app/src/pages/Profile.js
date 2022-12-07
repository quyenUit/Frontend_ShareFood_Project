import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../styles/profile.css";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const [user, setUser] = useState({});

  const { userInfo } = useSelector((state) => state.user);
  const username = useParams().serInfo.username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover"></div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ho va ten: {user.username}</h4>
              <span className="profileInfoDesc">Email: {user.email}</span>
            </div>
          </div>
          <div className="profileRightBottom"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
