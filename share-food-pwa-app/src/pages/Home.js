import NavbarPage from '../components/Header/navbarPage';
import CarouselFood from '../components/Body/Carousel';
import Store from '../components/Body/Store';


function HomePage(){
    return(
        <>
            <NavbarPage />
            <CarouselFood />
            <Store />
        </>
    );
}

export default HomePage;