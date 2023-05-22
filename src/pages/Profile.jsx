"use client";

import { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import styles from "@/styles/Profile.module.css";


const Profile = () => {
    const [user, setUser] = useState({null: "start"});

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

    return (
        <div>
            <MainNavBar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <img src="/img/filler.jpg" alt="фото профиля"/>
                    </div>
                        <p className={styles.info}> {user.login}</p>
                        <p className={styles.info}>{user.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;