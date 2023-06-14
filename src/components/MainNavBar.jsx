import Link from "next/link"
import styles from "@/styles/MainPage.module.css"
import {useState} from "react";
import Search from "@/components/Search";

const MainNavBar = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className="navbar-collapse d-lg-flex p-3">
                <ul className="nav col-lg-12 align-items-center justify-content-lg-between">
                    <li className="nav-item me-lg-5">
                        <p className={`navbar-brand col-lg-3 text-white fs-3 fw-bolder`}
                           href="#">
                            КультПросвет
                        </p>
                    </li>

                    <li className="nav-item me-lg-5">
                        <button
                            className={`${styles.searchbtn}`}
                            onClick={()=>{
                            setModalActive(true);
                        }}> найти мероприятие 🔎 </button>
                    </li>

                    <li className="nav-item me-lg-5">
                        <Link className={`nav-link fs-5 fw-semibold text-white`}
                              href="#">Сургут
                        </Link>
                    </li>
                </ul>
            </div>
            <Search active={modalActive} setActive={setModalActive} />
        </>

    )
}

export default MainNavBar;