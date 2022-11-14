import CarouselFood from "../components/Body/Carousel";
import SearchFood from "../components/Body/Utils/SearchFood";
import { useSelector } from "react-redux";
import Store from "../components/Body/Store";

function HomePage() {
  const {userInfo} = useSelector((state) => state.user)
  return (
    <>
      <SearchFood />
      {
        userInfo?
        (
          <></>
        )
        :
        (
          <CarouselFood />
        )
      }
      <Store />
    </>
  );
}

export default HomePage;
