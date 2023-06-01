import Header from "@/components/Header"
import styles from "@/styles/Index.module.css"
import StartNavBar from "@/components/StartNavBar";
import Footer from "@/components/Footer";

const StartLayout = ({ children }) => (
    <>
        <div className={styles.bg}>
            <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
                <header> <StartNavBar /> </header>
                {children}
                <Footer />
            </div>
        </div>
    </>
);

export default StartLayout;