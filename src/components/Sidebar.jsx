import Link from "next/link"
import {useState} from "react";
import {useRouter} from "next/router";

const Sidebar  = (index) => {
    const [active, setActive] = useState(0);
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 h-100 w-25">

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="/Main"
                          className={`nav-link ${active === 0 ? `active`: `text-white`}`}
                            onClick={() => setActive(index.value?? 0)}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link href="/Subscribes" className={`nav-link ${active === 1 ? `active`: `text-white`}`}
                          onClick={() => setActive(index.value?? 1)}>

                        Подписки
                    </Link>

                </li>
                <li>
                    <Link href="#" className={`nav-link ${active === 2 ? `active`: `text-white`}`}
                        onClick={()=>setActive(index.value?? 2)}>

                        Активные мероприятия
                    </Link>
                </li>
                <li>
                    <Link href="/MyEvents" className={`nav-link ${active === 3 ? `active`: `text-white`}`}
                        onClick={()=>setActive(index.value?? 3)}>
                        Мои мероприятия
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Настройки
                    </a>
                </li>
            </ul>
            <hr className="text-white"/>

            <div>
                <Link className="d-flex align-items-center text-white text-decoration-none"
                        href="/Profile">
                    <img src="/img/filler.jpg" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>профиль</strong>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;