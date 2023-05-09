import styles from "@/styles/Login.module.css"
import Link from "next/link"
import Button from "@/components/Button";
import StartNavBar from "@/components/StartNavBar";
import Footer from "@/components/Footer";

const Login = () => (
    <>
        <header>
            <StartNavBar />
        </header>

        <div className={styles.box}>
            <form className={styles.Form}>
                    <h1 className="h3 mb-2 fw-normal text-white fw-bold">Вход</h1>

                    <div className="form-floating w-100">
                        <input
                            type="email"
                            className={`form-control ${styles.inputField}`}
                            id="floatingInput"
                            placeholder="name@example.com" />
                            <label className="text-white" htmlFor="floatingInput">Введите логин</label>
                    </div>

                    <div className="form-floating w-100">
                        <input type="password"
                               className={`form-control ${styles.inputField}`}
                               id="floatingPassword"
                               placeholder="Password"/>
                            <label  className="text-white" htmlFor="floatingPassword">Введите пароль</label>
                    </div>

                    <div className="checkbox mb-2 text-white w-100 d-flex justify-content-around">
                        <label>
                            <input type="checkbox" value="remember-me" /> Запомнить меня
                        </label>

                        <Link
                            className="text-white"
                            href="/Signup">забыли пароль?</Link>
                    </div>

                    <Button
                        className="w-100 btn btn-lg btn-primary" type="submit"
                        href="/MainPage">Войти
                    </Button>
                    <button className="w-100 btn btn-lg btn-light" type="submit">
                        <img src="google.svg"/> продолжить с Google
                    </button>
                    <div className="w-75 d-flex justify-content-around">
                        <p className="text-white">Впервые здесь?</p>
                        <Link className="text-white" href="/Signup"> Зарегистрируйтесь</Link>
                    </div>
            </form>
        </div>

        <Footer />
    </>
);

export default Login;