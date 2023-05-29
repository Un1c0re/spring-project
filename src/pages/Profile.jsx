"use client";

import { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import styles from "@/styles/Profile.module.css";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import Image from "next/image";
import DropImage from "@/components/DropImage";

const Profile = () => {
    const [modalActive, setModalActive] = useState(false);
    const [user, setUser] = useState({null: "start"});
    const [avatar, setAvatar] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get("/api/profile");
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            source.cancel("Component unmounted.");
        };
    }, []);

    const eatCookie = async () => {
        // Получение значения куки по имени на стороне клиента
        const myCookieName = "token";

        // Удаление куки по имени на стороне клиента
        const handleDeleteCookie = () => {
            destroyCookie(null, myCookieName); // удаление куки
            console.log("success!");
        };

        await router.push("/");
        handleDeleteCookie();
    }

    useEffect(() => {
        const getAvatar =  async () => {
            // if(avatar == null) {
                try {
                    const response = await axios.get("/api/getPhoto");
                    setAvatar(response.data);
                } catch (e) {
                    console.log(e);
                }
            // }
        }
        getAvatar();

    }, [avatar]);

    return (
        <div>
            <MainNavBar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.content}>
                    <div className={styles.profilePhoto}>
                        <div className={styles.photo}>
                            <Image  src={`data:image/jpeg;base64,${avatar}`} width={200} height={200} alt="фото профиля" loading="eager"/>
                        </div>
                        <button type="button" className={`${styles.btn}`} onClick={()=> setModalActive(true)}>Изменить аватар</button>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.info}> {user.login} </p>
                        <p className={styles.info}> {user.email} </p>
                        <button className={`${styles.btn}  ${styles.redbtn}`} onClick={eatCookie}>Выйти</button>
                    </div>
                </div>
            </div>
            <DropImage active={modalActive} setActive={setModalActive} userData={user}/>
        </div>
    );
}

export default Profile;