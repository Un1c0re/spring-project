"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import styles from "@/styles/MainPage.module.css";
import Sidebar from "@/components/Sidebar";
import axios from "axios";

const Profile = () => {
    const router = useRouter();
    const [user, setUser] = useState({null: "start"});
    const [data, setData] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get("/api/profile", {
                    cancelToken: source.token
                });
                setData(response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request cancelled:", error.message);
                } else {
                    console.error(error);
                }
            }
        };

        fetchData();

        return () => {
            source.cancel("Component unmounted.");
        };
    }, []);

    // const getFromServer = async () => {
    //     try {
    //         const data = await axios.get("/api/profile")
    //
    //     } catch(e) {
    //         console.log("SUUUKAAA");
    //         console.log(e);
    //     }
    //
    // }

    return (
        <div>
            <MainNavBar />
            <div className={styles.content}>
                <Sidebar />
                <div>
                    <div>
                        <img src="" alt="фото профиля"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;