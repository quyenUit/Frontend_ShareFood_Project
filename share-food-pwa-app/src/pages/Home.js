import CarouselFood from "../components/Body/Carousel";
import { useSelector } from "react-redux";
import Store from "../components/Body/Store";
import Brands from "../components/Body/Utils/Brands";
function HomePage() {
  const {userInfo} = useSelector((state) => state.user)
  return (
    <>
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
      <Brands />
    </>
  );
}

export default HomePage;
