import Button from "@/components/Button";
import withStartLayout from "@/utils/hocs/withStartLayout";
import {useState} from "react";
import Login from "@/components/Login";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <h1 className="w-75 align-self-center text-center text-white fw-bolder" id={styles.mainText}>
                Узнайте больше о вашем городе
            </h1>

            <p className="w-50 align-self-center text-white fs-3 text-center">
                Посетите интересные мероприятия или устройте свое собственное,
                найдите единомышленников, оживите свой город
            </p>

            <Button
                className={`btn-light ${styles.button} align-self-center fs-4 text-center fw-bolder`}
                onClick={() => setModalActive(true)}
            >начать
            </Button>
            <Login active={modalActive} setActive={setModalActive}/>
        </>
    );
}

export default withStartLayout(HomePage);

