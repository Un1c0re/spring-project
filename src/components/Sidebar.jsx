import Link from "next/link"
import {useEffect, useState} from "react";
import axios from "axios";
import {IMAGES_MANIFEST} from "next/constants";
import Image from "next/image";


const Sidebar  = (index) => {
    const [active, setActive] = useState(null);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        const getAvatar =  async () => {
            try {
                const response = await axios.get("/api/getUserPhoto");
                setAvatar(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        getAvatar();

    }, [avatar]);

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
                      onClick={()=>setActive(index.value?? null)}
                        href="/Profile">
                    <Image
                        src={`data:image/jpeg;base64,${avatar}`}
                        width={50}
                        height={50}
                        alt="фото профиля"
                        className="rounded-circle me-2"
                        loading="eager"/>
                    <strong>профиль</strong>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;