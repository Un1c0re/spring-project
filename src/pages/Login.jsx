"use client";

import styles from "@/styles/Login.module.css"
import Link from "next/link"
import StartNavBar from "@/components/StartNavBar";
import Footer from "@/components/Footer";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import { parseCookies } from "nookies";


const Login = () => {
    const [msg, setMsg] = useState({null: "start"});
    const router = useRouter();
    // получаем текущие cookie
    const {token} = parseCookies();
    if (token) {
        router.push("/Main");
    }
    const handleSubmit = async (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());

        try {
            const data = await axios.post("/api/login", formJson);
            setMsg({msg: data.data.status});
            await router.push("/Main");
        } catch(e) {
            setMsg({err: e.response.data.status});
        };

    }



    return (
        <>
            <header>
                <StartNavBar/>
            </header>

            <div className={styles.box}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <h1 className="h3 mb-2 fw-normal text-white fw-bold">Вход</h1>

                    <div className="form-floating w-100">
                        <input
                            name="email"
                            type="email"
                            className={`form-control ${styles.inputField}`}
                            id="floatingInput"
                            placeholder="name@example.com"/>
                        <label className="text-white" htmlFor="floatingInput">Введите почту</label>
                    </div>

                    <div className="form-floating w-100">
                        <input
                            name="password"
                            type="password"
                            className={`form-control ${styles.inputField}`}
                            id="floatingPassword"
                            placeholder="Password"/>
                        <label className="text-white" htmlFor="floatingPassword">Введите пароль</label>
                    </div>

                    <div className="checkbox mb-2 text-white w-100 d-flex justify-content-around">
                        <label>
                            <input name="check" type="checkbox" value="remember-me"/> Запомнить меня
                        </label>

                        <Link
                            className="text-white"
                            href="/Signup">забыли пароль?</Link>
                    </div>

                    {msg.null? (
                        <button className="w-100 btn btn-lg btn-primary">
                            Войти
                        </button>
                    ) : (msg.err? (
                        <button className="w-100 btn btn-lg btn-danger">
                            {msg?.err}
                        </button>
                    ) : (
                        <button className="w-100 btn btn-lg btn-success">
                            {msg?.msg}
                        </button>
                    ))}
                    <div className="w-75 d-flex justify-content-around">
                        <p className="text-white">Впервые здесь?</p>
                        <Link className="text-white" href="/Signup"> Зарегистрируйтесь</Link>
                    </div>
                </form>
            </div>

            <Footer/>
        </>
    );
};

export default Login;