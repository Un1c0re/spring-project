import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";
import axios from "axios";

const sidebarItems = [
    { name: 'Главная', route: '/Main' },
    { name: 'Подписки', route: '#' },
    { name: 'Активные мероприятия', route: '#' },
    { name: 'Мои мероприятия', route: '/MyEvents' },
    { name: 'Настройки', route: '#' },
];

const Sidebar = () => {
    const router = useRouter();
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
                {sidebarItems.map((item) => (
                    <li key={item.name} className="nav-item">
                        <Link href={item.route}
                              className={ `nav-link ${router.pathname === item.route ? 'active' : 'text-white'}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div>
                <Link className="d-flex align-items-center text-white text-decoration-none"
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
}

export default Sidebar;