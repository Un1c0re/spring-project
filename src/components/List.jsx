import Card from "@/components/Card"
import styles from"@/styles/List.module.css"
const List = () => {
    return(
        <>
            <div className={styles.list}>
                <Card
                    img = "/img/port.png"
                    text = "Ночь музеев в порту"
                    date = "12.06.2023"
                />
                <Card
                    img = "/img/bal.jpg"
                    text = "Бал науки СурГУ"
                    date = "18.05.2023"
                />
                <Card
                    img = "/img/mall.jpg"
                    text = "Мастер-класс по витражам"
                    date = "24.06.2023"
                />

                <Card
                    img = "/img/nevesomost.jpg"
                    text = "Открытый микрофон в ДК Невесомость"
                    date = "24.06.2023"
                />

                <Card
                    img = "/img/fila.jpg"
                    text = "Уральский симфонический оркестр в филармонии"
                    date = "24.07.2023"
                />

                <Card
                    img = "/img/neft.jpg"
                    text = "Морской фестиваль в парке нефтяников"
                    date = "12.08.2023"
                />
            </div>
        </>
    );
}

export default List;