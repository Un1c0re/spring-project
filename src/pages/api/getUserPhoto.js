"use server";

import connect from "./db"
import { parseCookies } from "nookies";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const connection = await connect();
    const { token } = parseCookies({ req });

    if (token) {
        const data = jwt.verify(token, process.env.JWT_SECRET);

        try {
            const [rawSqlData] = await connection.query(
                "SELECT photo FROM user WHERE login = ?", [data.login]
            );
            const rawPhoto = rawSqlData[0].photo;
            if (rawPhoto.length > 0) {
                const photo = Buffer.from(rawPhoto, 'base64').toString('base64');
                res.send(photo);
            } else {
                console.log("no photo 😢😢")
                res.status(403).json({status: 'ошибка получения фото 🧐'});
            }
        } catch (e) {
            console.log(e);
        }
    } else {
        res.status(400).json({status: 'нет токена!'});
    }
    connection.end();
}

