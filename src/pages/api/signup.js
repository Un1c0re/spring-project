"use server";

import connect from "./db"
import { setCookie } from "nookies";
import jwt from "jsonwebtoken";

const  handler = async (req, res) => {
    const connection = await connect();
    const {email, login, password} = req.body;

    try {
        const [check] = await connection.query(
            'SELECT email FROM user where email = ? or login = ?', [email, login]
        );
        if(check.length > 0) {
            res.status(403).json({status: "такой пользователь уже существует"})
        } else {
            const [data] = await connection.query(
                'INSERT INTO user (email, login, password) VALUES (?, ?, ?)', [email, login, password]
            );
            const user = data[0];
            const payload =  {
                email: user.email,
                login: user.login,
                password: user.password
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h", // срок действия токена
            });

            setCookie({ res }, "token", token, {
                maxAge: 3600, // срок действия cookie в секундах
                path: "/", // путь, на котором cookie будет доступен
            });
            res.status(200).json({status: 'Вы зарегистрировались'});
        }
    } catch (e) {
        console.log(e);
    }
    connection.end();
}

export default handler;