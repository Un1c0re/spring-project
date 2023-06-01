import Header from "@/components/Header"
import styles from "@/styles/Index.module.css"
import StartNavBar from "@/components/StartNavBar";
import Footer from "@/components/Footer";

import { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const StartLayout = ({ children }) => {
    useEffect(() => {
        const handleStart = () => {
            NProgress.start()
        }

        const handleComplete = () => {
            NProgress.done()
        }

        Router.events.on('routeChangeStart', handleStart)
        Router.events.on('routeChangeComplete', handleComplete)
        Router.events.on('routeChangeError', handleComplete)

        return () => {
            Router.events.off('routeChangeStart', handleStart)
            Router.events.off('routeChangeComplete', handleComplete)
            Router.events.off('routeChangeError', handleComplete)
        }
    }, [])

    return (
            <>
                <div className={styles.bg}>
                    <div className="container vh-100 pt-5 d-flex flex-column a justify-content-between">
                        <header><StartNavBar/></header>
                        {children}
                        <Footer/>
                    </div>
                </div>
            </>
    );
};

export default StartLayout;