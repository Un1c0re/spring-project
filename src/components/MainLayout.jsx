import Header from "@/components/Header"
import styles from "@/styles/MainLayout.module.css"
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";


const MainLayout = ({ children }) => (
    <div className={styles.bg}>
        <header>
            <MainNavBar />
        </header>

        <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
            <div className={styles.content}>
                <Sidebar index={0}/>
                {children}
            </div>
        </div>
    </div>
);

export default MainLayout;