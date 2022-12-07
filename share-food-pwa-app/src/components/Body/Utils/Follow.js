// import React, {useState, useEffect} from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';

// const Follow = () => {
//     const [vacationsArray, setVacationsArray] = useState([]);
//     const { userInfo } = useSelector((state) => state.user);

//     useEffect(() => {
//         axios.get("http://localhost:3001/signup")
//         .then(data => {
//             setVacationsArray(data.data)
//             console.log(data.data)
//         }).catch(e => {
//             console.log("failed to fetch data" + e)
//         })
//     }, [])

//     const onUnfollowClicked = async()=>{
//         console.log("Unfollowed")
//     }

//     const onFollowClicked = async (followerId: any) =>{
//         let userId = userInfo.username[0].id;
//         await axios.post(`http://localhost:3001/followedVacations/${followerId}`, {followerId, userId});
//       }
//   return (

//   );
// }

// export default Follow
