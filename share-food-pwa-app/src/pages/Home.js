import CarouselFood from "../components/Body/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Store from "../components/Body/Store";
import Brands from "../components/Body/Utils/Brands";
import { postList } from "../features/posts/postList";
function HomePage() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(postList());
  return (
    <>
      {userInfo ? <></> : <CarouselFood />}
      <Store />
      <Brands />
    </>
  );
}

export default HomePage;
