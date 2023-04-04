import styles from "@/styles/Login.module.css"
import Link from "next/link";
const Signup = () => (
    <>
        <div className={styles.box}>
            <form className={styles.loginForm}>
                <h1 className="h3 mb-2 fw-normal text-white fw-bold">Регистрация</h1>

                <div className="form-floating w-100">
                    <input
                        type="email"
                        className={`form-control ${styles.inputField}`}
                        id="floatingInput"
                        placeholder="name@example.com" />
                    <label className="text-white" htmlFor="floatingInput">Введите адрес электронной почты</label>
                </div>

                <div className="form-floating w-100">
                    <input
                        type="name"
                        className={`form-control ${styles.inputField}`}
                        id="floatingInput"
                        placeholder="name@example.com" />
                    <label className="text-white" htmlFor="floatingInput">Придумайте логин</label>
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
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
                <Link className="text-white" href="/Login">У меня уже есть аккаунт</Link>
            </form>
        </div>
    </>
);

export default Signup;