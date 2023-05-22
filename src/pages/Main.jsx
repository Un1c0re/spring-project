"use client";

import Sidebar from "@/components/Sidebar";
import MainNavBar from "@/components/MainNavBar";
import List from "@/components/List";


const Main = () => (
    <>
        <header>
            <MainNavBar />
        </header>

        <div className="flex-grow-1 d-flex justify-content-lg-between ">
            <Sidebar />
            <List />
        </div>
    </>
);

export default Main;