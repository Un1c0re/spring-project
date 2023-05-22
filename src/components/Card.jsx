import Image from "next/image";
import styles from "@/styles/Card.module.css"
const Card = ({img, text, date}) => {
    return (
        <>
            <div className={styles.card}>
                <img src={img}  alt="event photo" className="w-100"/>

                <div className=" position-absolute top-50 p-3">
                    <p className="text-white fs-4">{text}</p>
                    <p className=" text-white fs-4">{date}</p>
                    <button className="p-2 bg-white text-black fw-bold border-0 rounded-3">КУПИТЬ БИЛЕТ</button>
                </div>
            </div>
        </>
    );
}

export default Card;