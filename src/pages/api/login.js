"use server";

import connect from "./db"
import {parseCookies, setCookie} from "nookies";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    const connection = await connect();
    const {email, password} = req.body;
    const { token } = parseCookies({ req });

    // Хеширование пароля
    const hashPassword = async (password) => {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    };

    if (token) {
        // если токен найден, отправляем его в заголовке HTTP
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const data = decodedToken.data;

        if(data.email === email && data.password === password) {
            res.setHeader("Authorization", `Bearer ${token}`);
        }
    } else {
        try {
            const [data] = await connection.query(
                "SELECT * FROM user WHERE email = ?", [email]
            );

            if (data.length > 0) {
                const user = data[0];

                const hashedPassword = user.password;
                const match = await bcrypt.compare(password, hashedPassword);

                if (!match) {
                    res.status(403).json({ status: 'Неверный пароль 👿' });
                } else {
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

                    res.status(200).json({status: 'Добро пожаловать! 🥳' });
                }
            } else {
                res.status(403).json({ status: 'Такого пользователя не существует 🧐' });
            }
        } catch (e) {
            console.log(e);
        }
    }
    connection.end();
}

