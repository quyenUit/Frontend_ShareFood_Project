import CarouselFood from "../components/Body/Carousel";
import SearchFood from "../components/Body/Utils/SearchFood";
import Store from "../components/Body/Store";
import Brands from "../components/Body/Utils/Brands";
function HomePage() {
  return (
    <>
      <SearchFood />
      <CarouselFood />
      <Store />
      <Brands />
    </>
  );
}

export default HomePage;
