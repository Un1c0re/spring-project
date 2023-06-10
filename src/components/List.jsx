import Card from "@/components/Card"
import styles from"@/styles/List.module.css"
import {useState} from "react";
import axios from "axios";
const List = () => {
    const [eventList,setEventList] = useState(null);

    const getFromServer = async () => {
        if(eventList == null) {
            try {
                const response = await axios.get("/api/getEvents");
                setEventList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    getFromServer();

    return(
        <div className={styles.content}>
            <div className={styles.list}>
                {eventList == null? (
                    <p>Здесь пока нет мероприятий</p>
                ) : (
                    eventList.map(x => (
                        // eslint-disable-next-line react/jsx-key
                        <Card
                            event={x}
                            key={x.event_id}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default List;