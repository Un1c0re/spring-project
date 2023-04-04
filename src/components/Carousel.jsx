import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";


const BootstrapCarousel = () => (
    <>
        <Carousel>
            {["cl_1.jpg", "cl_2.jpg", "cl_3.jpg"].map((x) => (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`img/${x}`}
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h1>Wabo labo dub dub</h1>
                        <p>yeahhh lorem ipsummmmmmaaaaa</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </>
);

export default BootstrapCarousel;