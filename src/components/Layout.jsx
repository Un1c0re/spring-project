import Header from "@/components/Header"
import Footer from "@/components/Footer";
import styles from "@/styles/Index.module.css"
import Parallax from "@/components/Parallax";


const Layout = ({ children }) => (
    <>
        <div className={styles.parallax}>
            <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    </>
);

export default Layout;