import CarouselFood from "../components/Body/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Store from "../components/Body/Store";
import Brands from "../components/Body/Utils/Brands";
import { postList } from "../features/posts/postList";
import SearchFood from "../components/Body/Utils/SearchFood";
import Mapgg1 from "./Mapgg1";
// import Map1 from "../components/Map/Map1";

function HomePage() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(postList());
  return (
    <>
      {userInfo ? <></> : <CarouselFood />}
      <SearchFood />
      <Store />
      <Brands />
      <Mapgg1 />
    </>
  );
}

export default HomePage;
