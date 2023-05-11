import Sidebar from "@/components/Sidebar";
import MainNavBar from "@/components/MainNavBar";
import Footer from "@/components/Footer";
import List from "@/components/List";
import styles from "@/styles/MainPage.module.css"

const MainPage = () => (
    <>
        <header>
            <MainNavBar />
        </header>

        <div className={styles.content}>
            <Sidebar />
            <List />
        </div>

        {/*<Footer />*/}
    </>
);

export default MainPage;