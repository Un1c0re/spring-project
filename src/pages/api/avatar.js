"use server"

import connect from "./db"
import {parseCookies, setCookie} from "nookies";
import jwt from "jsonwebtoken";

const  handler = async (req, res) => {
    const connection = await connect();
    const clientData = req.body;

    const photo = Buffer.from(clientData.photo, 'base64').toString('base64');
    const userData = clientData.userData;

    try {
        const payload =  {
            email: userData.email,
            login: userData.login,
            password: userData.password,
            photo: photo
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h", // срок действия токена
        });

        setCookie({ res }, "token", token, {
            maxAge: 3600, // срок действия cookie в секундах
            path: "/", // путь, на котором cookie будет доступен
        });
    } catch (e) {
        console.log(e);
    }

    try {
        const [rows] = await connection.query('SELECT * FROM user WHERE login = ?', [userData.login]);
        if (rows.length > 0) {
            await connection.query('UPDATE user SET photo = ? WHERE login = ?', [photo, userData.login]);
            res.status(200).json({status: 'аватар обновлен 🥹'});
        } else {
            res.status(404).json({status: 'пользователь не найден'});
        }
    } catch (e) {
        res.status(403).json({status: 'что-то пошло не так ☠️'});
        console.log(e);
    }
    connection.end();
}

export default handler;