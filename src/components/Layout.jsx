import Header from "@/components/Header"
import styles from "@/styles/Index.module.css"


const Layout = ({ children }) => (
    <>
        <div className={styles.parallax}>
            <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
                {children}
            </div>
        </div>
    </>
);

export default Layout;