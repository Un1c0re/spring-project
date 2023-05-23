"use server";

import connect from "./db"
import {setCookie} from "nookies";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const  handler = async (req, res) => {
    const connection = await connect();
    const {email, login, password} = req.body;

    if(password.length <= 0) {
        res.status(403).json({status: "Введите пароль 🤨"})
        connection.end();
        return;
    }

    try {
        const [check] = await connection.query(
            'SELECT email FROM user where email = ? or login = ?', [email, login]
        );
        if(check.length > 0) {
            res.status(403).json({status: "Такой пользователь уже есть 🧐"})
        } else {
            // Хеширование пароля
            const hashPassword = async (password) => {
                const saltRounds = 10;
                return await bcrypt.hash(password, saltRounds);
            };
            const hashedPassword = await hashPassword(password);
            await connection.query(
                'INSERT INTO user (email, login, password) VALUES (?, ?, ?)', [email, login, hashedPassword]
            );

            const payload =  {
                email: email,
                login: login,
                password: password
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h", // срок действия токена
            });

            setCookie({ res }, "token", token, {
                maxAge: 3600, // срок действия cookie в секундах
                path: "/", // путь, на котором cookie будет доступен
            });
            res.status(200).json({status: 'Добро пожаловать 🥳'});
        }
    } catch (e) {
        console.log(e);
    }
    connection.end();
}

export default handler;