"use client";

import { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import styles from "@/styles/Subscribes.module.css";
import withMainLayout from "@/utils/hocs/withMainLayout";


const Subscribes = () => {
    // const [user, setUser] = useState({null: "start"});
    //
    // useEffect(() => {
    //     const source = axios.CancelToken.source();
    //
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/api/profile");
    //             setUser(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //
    //     fetchData();
    //
    //     return () => {
    //         source.cancel("Component unmounted.");
    //     };
    // }, []);

    return (
        <div className={styles.subscribes}>
            <div className={styles.content}>
                <div className={styles.items}>
                    <p> meow!: большой сольник в невесомости</p>
                    <p>29.07.2023</p>
                    <button className="btn btn-light h1 fw-bold">Подробнее</button>
                </div>
                <div className={styles.items}>
                    <p> Открытый микрофон</p>
                    <p>27.06.2023</p>
                    <button className="btn btn-light h1 fw-bold">Подробнее</button>
                </div>
                <div className={styles.items}>
                    <p> Космопопрт17: большой сольник в невесомости </p>
                    <p>27.04.2023</p>
                    <button className="btn btn-light h1 fw-bold">Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default withMainLayout(Subscribes, 1);