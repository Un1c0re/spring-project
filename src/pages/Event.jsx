import withMainLayout from "@/utils/hocs/withMainLayout";
import Image from "next/image";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

import styles from "@/styles/Event.module.css";

const Event = () => {
    const [eventData, setEventData] = useState(null);
    const [ownerData, setOwnerData] = useState(null);
    const router = useRouter();
    const id = router.query.id;

    // useEffect(() => {
    //     if (id) {
    //         router.replace("/Event", undefined, { shallow: true });
    //     }
    // }, [id, router]);

    useEffect(() => {
        const getEventData = async () => {
            if (eventData == null && id) {
                try {
                    const response = await axios.post("/api/getEventById", {event_id: id});
                    setEventData(response.data[0]);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        getEventData();
    }, [eventData, id]);

    useEffect(() => {
        const getOwnerData = async () => {
            if (eventData && !ownerData) {
                try {
                    const response = await axios.post("/api/getOwnerById", {owner_id: eventData.owner_id});
                    setOwnerData(response.data[0]);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        getOwnerData();
    }, [ownerData, eventData]);


    // useEffect(() => {
    //     if (ownerData) {
    //         // Обновляем состояние компонента, когда данные получены
    //         console.log("DATA?????????????????", ownerData);
    //     }
    // }, [ownerData]);

    const formatImage = (raw) => {
        return Buffer.from(raw, 'base64').toString('base64');
    }

    const getDatetime = (raw) => {
        const datetime = new Date(raw);

        const day       = datetime.getDate().toString().padStart(2, '0');
        const month     = (datetime.getMonth() + 1).toString().padStart(2, '0');
        const year      = datetime.getFullYear();
        const hours     = datetime.getHours().toString().padStart(2, '0');
        const minutes   = datetime.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    return (
        <div className={styles.content}>
            {eventData != null  && ownerData != null ? (
                <>
                    <div className={styles.card}>
                        <Image
                            src={`data:image/jpeg;base64,${formatImage(eventData.event_photo)}`}
                            width={700}
                            height={400}
                            alt="фото профиля"
                            loading="eager"
                        />
                        <h1>{eventData.event_name}</h1>
                        <h2>от {ownerData.login}</h2>
                    </div>

                    <p>{eventData.event_description}</p>
                    <p>Когда: {getDatetime(eventData.event_datetime)}</p>
                    <p>Где: {eventData.event_place}</p>
                    <button className={styles.btn}>Зарегистрироваться</button>
                </>


            ) : (
                <div
                    className="bg-danger h-25 w-50 rounded-2 d-flex align-items-center justify-content-center"
                >Упс! Здесь ничего нет 🥸🥸🥸
                </div>
            )}
        </div>
    );
}


export default withMainLayout(Event, 0);