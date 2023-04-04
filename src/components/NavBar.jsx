import styles from "@/styles/NavBar.module.css"
import Link from "next/link"
import Home from "@/pages/Home"
const NavBar = () => {
    return (
        // <div>
        <div className="navbar-collapse d-lg-flex">
            <Link className={`navbar-brand ${styles.brand} col-lg-3 text-white fs-3 fw-bolder`}
                  href="#">
                КультПросвет
            </Link>

            <ul className="nav col-lg-9 align-items-center justify-content-lg-end">
                <li className="nav-item me-lg-5">
                    <Link className={`nav-link ${styles.nav_link} fs-5 fw-semibold`}
                          href="/">Начало
                    </Link>
                </li>
                <li className="nav-item me-lg-5">
                    <Link className={`nav-link ${styles.nav_link} fs-5 fw-semibold`}
                          href="/About">О проекте
                    </Link>
                </li>
                <li className="nav-item me-lg-5">
                    <Link className={`nav-link ${styles.nav_link} fs-5 fw-semibold`}
                          href="/posts">Контакты
                    </Link>
                </li>
            </ul>
        </div>
        // </div>
    )
}

export default NavBar;