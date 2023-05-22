import Link from "next/link"

const Sidebar  = () => (
    <div className="d-flex flex-column flex-shrink-0 p-3 h-100 w-25">

        <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="/Profile" className="nav-link active" aria-current="page">
                        Главная
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        Подписки
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        Активные мероприятия
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        Мои мероприятия
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        Настройки
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"></svg>
                        lorem ipsum
                    </a>
                </li>
            </ul>
            <hr className="text-white" />

            <div className="dropdown">
                <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
    </div>

);

export default Sidebar;