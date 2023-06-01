import Header from "@/components/Header"
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/MainLayout.module.css";


const MainLayout = ({ children , index}) => (
    <div className={styles.bg}>
        <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
            <header> <MainNavBar /> </header>

            <div className={styles.content}>
                <Sidebar index={index}/>
                {children}
            </div>
        </div>
    </div>
);

export default MainLayout;