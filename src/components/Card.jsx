import styles from "@/styles/Card.module.css"
const Card = ({img, text, date}) => {
    return (
        <div className={styles.card}>
            <img src={img}  alt="event photo"/>

            <div className=" position-absolute top-50 p-3">
                <p>{text}</p>
                <p>{date}</p>
                <button className="p-2 bg-white text-black fw-bold border-0 rounded-2">Подробнее</button>
            </div>
        </div>
    );
}

export default Card;