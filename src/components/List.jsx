import Card from "@/components/Card"
import styles from"@/styles/List.module.css"
const List = () => {
    return(
        <>
            <div className={styles.list}>
                <Card
                    img = "/img/mcr.jpg"
                    text = "Концерт My Chemical Romance в Москве"
                    date = "24.06.2023"
                />
                <Card
                    img = "/img/mcr.jpg"
                    text = "Концерт My Chemical Romance в Москве"
                    date = "24.06.2023"
                />
                <Card
                    img = "/img/mcr.jpg"
                    text = "Концерт My Chemical Romance в Москве"
                    date = "24.06.2023"
                />
            </div>
        </>
    );
}

export default List;