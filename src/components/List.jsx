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

    const getDatetime = (raw) => {
        const datetime = new Date(raw);

        const day = datetime.getDate().toString().padStart(2, '0');
        const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
        const year = datetime.getFullYear();
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    return(
        <>
            <div className={styles.list}>
                {eventList == null? (
                    <p>Здесь пока нет мероприятий</p>
                ) : (
                    eventList.map(x => (
                        // eslint-disable-next-line react/jsx-key
                        <Card
                            key={x.event_id}
                            img={x.event_photo}
                            text={x.event_name}
                            date={getDatetime(x.event_datetime)}
                        />
                    ))
                )}
                {/*<Card*/}
                {/*    img = "/img/port.png"*/}
                {/*    text = "Ночь музеев в порту"*/}
                {/*    date = "12.06.2023"*/}
                {/*/>*/}
                {/*<Card*/}
                {/*    img = "/img/bal.jpg"*/}
                {/*    text = "Бал науки СурГУ"*/}
                {/*    date = "18.05.2023"*/}
                {/*/>*/}
                {/*<Card*/}
                {/*    img = "/img/mall.jpg"*/}
                {/*    text = "Мастер-класс по витражам"*/}
                {/*    date = "24.06.2023"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    img = "/img/nevesomost.jpg"*/}
                {/*    text = "Открытый микрофон в ДК Невесомость"*/}
                {/*    date = "24.06.2023"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    img = "/img/fila.jpg"*/}
                {/*    text = "Уральский симфонический оркестр в филармонии"*/}
                {/*    date = "24.07.2023"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    img = "/img/neft.jpg"*/}
                {/*    text = "Морской фестиваль в парке нефтяников"*/}
                {/*    date = "12.08.2023"*/}
                {/*/>*/}
            </div>
        </>
    );
}

export default List;