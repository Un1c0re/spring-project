import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/Carousel.module.css"

const BootstrapCarousel = () => {
    const data = [
        ["cl1.jpg", "Узнайте", "Откройте для себя неведомые ранее мероприятия вашего города", "cl1.jpg"],
        ["cl2.jpg", "Посетите", "Научные конференции, в книжные клубы, концерты, мастер классы и многое другое"],
        ["cl3.jpg", "Знакомьтесь", "Найдите тех, кто разделяет ваши интересы, и заведите новых друзей"],
        ["cl4.jpg", "Творите", "Организуйте свое мероприятие, вдохните жизнь в улицы вашего города"]
    ]
    return (
        <Carousel>
            {data.map(x => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Carousel.Item>
                        <img
                            className={styles.image}
                            src={`img/${x[0]}`}
                            alt="photo"
                        />
                        <Carousel.Caption>
                            <h1>{x[1]}</h1>
                            <p>{x[2]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )

            })}
        </Carousel>
    );
};


export default BootstrapCarousel;