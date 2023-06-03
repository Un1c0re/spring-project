"use client"

import axios from "axios";
import {useState} from "react";
import withMainLayout from "@/utils/hocs/withMainLayout";
import styles from "@/styles/MyEvents.module.css";
import CreateEvent from "@/components/CreateEvent";

const MyEvents = () => {
    const [eventList,setEventList] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const getFromServer = async () => {
        if(eventList == null) {
            try {
                const response = await axios.get("/api/getMyEvents");
                setEventList(response.data);
                console.log(eventList);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const getDatetime = (raw) => {
        const datetime = new Date(raw);

        const day = datetime.getDate().toString().padStart(2, '0');
        const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
        const year = datetime.getFullYear();
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    getFromServer();

    return (
        <>
            <div className={styles.list}>
                {eventList == null? (
                    <h1 className="text-white fs-4">Вы еще не создали ни одного мероприятия</h1>
                ) : (
                    eventList.map(x => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={styles.items} key={x.event_id}>
                            <p>{x.event_name}</p>
                            <p>{getDatetime(x.event_datetime)}</p>
                            <button className="btn btn-light h1 fw-bold">подробнее</button>
                        </div>
                    ))
                )}
                <button
                    className={styles.button}
                    onClick={ () => setModalActive(true) }
                >Создать мероприятие</button>
            </div>
            <CreateEvent active={modalActive} setActive={setModalActive}/>
        </>
    );
};

export default withMainLayout(MyEvents, 4);