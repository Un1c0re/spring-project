"use client"

import styles from "@/styles/Login.module.css"
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Login from "@/components/Login";

const Signup = ({active, setActive}) => {
    const [modalActive, setModalActive] = useState(false);
    const [msg, setMsg] = useState({null: "start"});
    const router = useRouter();
    const handleSubmit = async (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());

        try {
            const data = await axios.post("/api/signup", formJson);
            setMsg({msg: data.data.status});
            await router.push("/Main");
        } catch (e) {
            setMsg({err: e.response.data.status});
        };
    }

    return (
        <>
            <div
                className={ active ? `${styles.bg} ${styles.active}` : styles.bg}
                onClick={() => setActive(false)}
            >
                <div className={styles.box} onClick={e => e.stopPropagation()}>
                    <form className={styles.Form} onSubmit={handleSubmit}>
                        <h1 className="h3 mb-2 fw-normal text-white fw-bold">Регистрация</h1>

                        <div className="form-floating w-100">
                            <input
                                name="email"
                                type="email"
                                className={`form-control ${styles.inputField}`}
                                id="floatingInput"
                                placeholder="name@example.com"/>
                            <label className="text-white" htmlFor="floatingInput">Введите адрес электронной почты</label>
                        </div>

                        <div className="form-floating w-100">
                            <input
                                name="login"
                                type="name"
                                className={`form-control ${styles.inputField}`}
                                id="floatingInput"
                                placeholder="name@example.com"/>
                            <label className="text-white" htmlFor="floatingInput">Придумайте логин</label>
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
                            <button
                                className="w-100 btn btn-lg btn-primary"
                                type="submit">Зарегистрироваться
                            </button>
                        ) : (msg.err? (
                            <button className="w-100 btn btn-lg btn-danger" type="submit">
                                {msg?.err}
                            </button>
                        ) : (
                            <button className="w-100 btn btn-lg btn-success">
                                {msg?.msg}
                            </button>
                        ))}

                        <p className="text-white"
                           onClick={() => setActive(false)}
                        >У меня уже есть аккаунт
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Signup;