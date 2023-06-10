import styles from "@/styles/Card.module.css"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
const Card = ({event}) => {

    const formatImage = (raw) => {
        return Buffer.from(raw, 'base64').toString('base64')
    }

    const getDatetime = (raw) => {
        const datetime = new Date(raw);

        const day = datetime.getDate().toString().padStart(2, '0');
        const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
        const year = datetime.getFullYear();
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardPhoto}>
                <Image  src={`data:image/jpeg;base64,${formatImage(event.event_photo)}`}
                        width={100}
                        height={250}
                        alt="фото профиля"
                        loading="eager"
                />

            </div>
            <div className={styles.cardText}>
                <h1>{event.event_name}</h1>
                <p>Когда: {getDatetime(event.event_datetime)}</p>
                <p>Где: {event.event_place}</p>
                <Button
                    href={`/Event?id=${event.event_id}`}
                    className={styles.btn}
                >Подробнее</Button>
            </div>
        </div>
    );
}

export default Card;