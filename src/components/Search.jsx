"use client";

import styles from "@/styles/Search.module.css"
import {useRef, useState} from "react";
import axios from "axios";
import Card from "@/components/Card";
import Button from "@/components/Button";


const Search = ({active, setActive}) => {
    const [list, setList] = useState(null);
    const refInput = useRef("none");

    const findEvent = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        try {
            const response = await axios.post("/api/searchEvent", formJson);
            setList(response.data);
        } catch(e) {
            console.log(e);
        }
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
        <>
            <div
                className={ active ? `${styles.bg} ${styles.active}` : styles.bg}
                onClick={() => {
                    setActive(false);
                    setList(null);
                }}
            >
                <div className={styles.box} onClick={e => e.stopPropagation()}>
                    <form onSubmit={findEvent}>
                        <input
                            name="eventname"
                            className={styles.search}
                            placeholder="поиск мероприятия"/>
                    </form>
                    {list == null? (
                        <div className="text-white">
                            <p className="text-muted">Укажите в поиске мероприятие</p>
                        </div>
                    ) : (
                        list.map(x => (
                            // eslint-disable-next-line react/jsx-key
                            <div className={styles.result}>
                                <p>{x.event_name}</p>
                                <p>{getDatetime(x.event_datetime)}</p>
                                <Button
                                    href={`/Event?id=${x.event_id}`}
                                    className="btn bg-transparent text-white fw-bold border-light rounded-1"
                                >подробнее</Button>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </>
    );
};

export default Search;