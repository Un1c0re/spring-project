"use server"

import connect from "./db"
import {parseCookies} from "nookies";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {

    const { token } = parseCookies({ req });
    if (token) {
        try {
            // декодируем токен и получаем полезную нагрузку
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            // const userId = decodedToken.userId;
            console.log(decodedToken);
            res.status(200).json(decodedToken);
            // используем данные из токена
            // const
        } catch (e) {
            console.log(e)
            // обрабатываем ошибку декодирования токена
        }
    } else {
        console.log("NO TOKEN?? 😢😢😢");
        // если токен не найден, отправляем ошибку аутентификации
    }
}

export default handler;