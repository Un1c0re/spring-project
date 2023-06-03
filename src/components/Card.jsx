import styles from "@/styles/Card.module.css"
import Image from "next/image";
const Card = ({img, text, date}) => {

    const formatImage = (raw) => {
        return Buffer.from(raw, 'base64').toString('base64')
    }

    return (
        <div className={styles.card}>
            <Image  src={`data:image/jpeg;base64,${formatImage(img)}`} width={100} height={500} alt="фото профиля" loading="eager"/>
            {/*<img src={img}  alt="event photo"/>*/}
            <div className=" position-absolute top-50 p-3">
                <p>{text}</p>
                <p>{date}</p>
                <button className="p-2 bg-white text-black fw-bold border-0 rounded-2">Подробнее</button>
            </div>
        </div>
    );
}

export default Card;