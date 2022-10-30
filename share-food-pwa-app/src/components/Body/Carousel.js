import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../../images/carousel-1.jpeg';
import carouselImage2 from '../../images/carousel-2.jpg';
import carouselImage3 from '../../images/carousel-3.jpg';
import '../../styles/Carousel.css'

function CarouselFood() {
  return (
    <div className="carousel-food">
        <Carousel className='col-lg-12'>
            <Carousel.Item interval={8000}>
                <img className="image-carousel"
                src={carouselImage3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="">
                        <span></span>
                        <div class="message">
                            <div class="word1">Hãy liên hệ chúng tôi</div>
                        </div>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img className="image-carousel"
                src={carouselImage2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1 className="">
                    <span></span>
                    <div class="message">
                        <div class="word1">Hãy liên hệ chúng tôi</div>
                    </div>
                </h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselFood;