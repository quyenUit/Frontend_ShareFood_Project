import CarouselFood from "../components/Body/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Store from "../components/Body/Store";
import Brands from "../components/Body/Utils/Brands";
import { postList } from "../features/posts/postList";
import SearchFood from "../components/Body/Utils/SearchFood";
import Maps from "../components/Body/MapLocation/Map";
import { ChakraProvider, theme } from '@chakra-ui/react'
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
      <ChakraProvider theme={theme}>
        <Maps/>
      </ChakraProvider>
    </>
  );
}

export default HomePage;
