import Header from "@/components/Header"
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/MainLayout.module.css";


const MainLayout = ({ children }) => {

    return (
        <div className={styles.bg}>
            <div className="container vh-100 pt-5 d-flex flex-column gap-4">
                <header><MainNavBar/></header>

                <div className={styles.content}>
                    <Sidebar/>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;