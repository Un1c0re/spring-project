"use client";

import Sidebar from "@/components/Sidebar";
import MainNavBar from "@/components/MainNavBar";
import List from "@/components/List";
import styles from "@/styles/MainPage.module.css"

const Main = () => (
    <>
        {/*<header>*/}
        {/*    <MainNavBar />*/}
        {/*</header>*/}

        {/*<div className={styles.content}>*/}
        {/*    <Sidebar index={0}/>*/}
        <List />
        {/*</div>*/}
    </>
).;

Main.getLayout()

export default Main;