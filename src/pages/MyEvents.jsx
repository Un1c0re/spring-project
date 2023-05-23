"use client"

import MainNavBar from "@/components/MainNavBar";
import styles from "@/styles/Profile.module.css";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import {useState} from "react";


const MyEvents = () => {
    const [eventList,setEventList] = useState("");
    const getFromServer = async () => {
        try {
            const response = await axios.get("/api/events");
            setEventList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    getFromServer();


    return (
        <div>
            <MainNavBar />
            <div className={styles.profile}>
                <Sidebar index={3}/>
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <img src="/img/filler.jpg" alt="фото профиля"/>
                    </div>
                    {eventList.length > 0? (
                        <p>Вы еще не создали ни одного мероприятия</p>
                    ) : (
                        [eventList].map(x => (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <p>{x[0]}</p>
                            </div>

                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyEvents;