import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import styles from "@/styles/Home.module.css"

const Home = () => {
    return (
        <>
            {/*<NavBar />*/}

            <h1 className="w-75 align-self-center text-center text-white fw-bolder" id={styles.mainText}>
                Узнайте больше о вашем городе
            </h1>

            <p className="w-50 align-self-center text-white fs-3 text-center">
                Посетите интересные мероприятия или устройте свое собственное,
                найдите единомышленников, оживите свой город
            </p>

            <button
                className={`btn ${styles.button} align-self-center fs-4 text-center fw-bolder`}>
                начать
            </button>

            {/*<Footer />*/}
        </>
    );
};

export default Home;
