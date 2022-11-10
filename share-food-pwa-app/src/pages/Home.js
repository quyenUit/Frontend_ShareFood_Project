import NavbarPage from "../components/Header/navbarPage";
import CarouselFood from "../components/Body/Carousel";
import SearchFood from "../components/Body/Utils/SearchFood";
import Store from "../components/Body/Store";

function HomePage() {
  return (
    <>
      <SearchFood />
      <CarouselFood />
      <Store />
    </>
  );
}

export default HomePage;
