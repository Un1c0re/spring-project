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
            console.log("token????", decodedToken);
            res.status(200).json(decodedToken);
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log("NO TOKEN?? 😢😢😢");
    }
}

export default handler;
