"use client";

import { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import styles from "@/styles/Profile.module.css";
import {destroyCookie, parseCookies} from "nookies";
import { useRouter } from "next/router";


const Profile = () => {
    const [user, setUser] = useState({null: "start"});
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
        const myCookieName = 'myCookie';

        // Удаление куки по имени на стороне клиента
        const handleDeleteCookie = () => {
            destroyCookie(null, myCookieName); // удаление куки
            console.log("success!");
        };

        await router.push("/");
        handleDeleteCookie();
    }

    return (
        <div>
            <MainNavBar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <img className={styles.image} src="/img/filler.jpg" alt="фото профиля"/>
                    </div>
                        <p className={styles.info}> {user.login}</p>
                        <p className={styles.info}>{user.email}</p>
                        <button className={styles.btn} onClick={eatCookie}>Выйти</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;