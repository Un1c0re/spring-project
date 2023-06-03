"use client";

import styles from "@/styles/Login.module.css"
import Link from "next/link"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import Signup from "@/components/Signup";


const Login = ({active, setActive}) => {
    const [modalActive, setModalActive] = useState(false);
    const [msg, setMsg] = useState({null: "start"});
    const router = useRouter();
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
        }
    }

    return (
        <>
            <div
                className={ active  && !modalActive ? `${styles.bg} ${styles.active}` : styles.bg}
                onClick={() => setActive(false)}
            >
                <div className={styles.box} onClick={e => e.stopPropagation()}>
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
                        <div className="w-100 d-flex justify-content-around">
                            <p className="text-white">Впервые здесь?</p>
                            <p className="text-white fw-bold"
                            onClick={() => setModalActive(true)}
                            > Зарегистрируйтесь</p>
                        </div>
                    </form>
                </div>
            </div>
            <Signup active={modalActive} setActive={setModalActive}/>
        </>
    );
};

export default Login;