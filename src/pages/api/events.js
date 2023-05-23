"use server"

import connect from "./db"
import {parseCookies} from "nookies";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    const connection = await connect();

    const { token } = parseCookies({ req });
    if (token) {
        try {
            // декодируем токен и получаем полезную нагрузку
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const email = decodedToken.data.email;
            try {
                const [userid] = await connection.query("SELECT user_id FROM user WHERE email = ?", [email]);
                console.log(userid);
                const [data] = await connection.query('SELECT * FROM events WHERE owner_id = ?', [userid]);

                if(data.length > 0) {
                    res.status(200).json(data);
                } else {
                    res.status(403).json("нет мероприятий.");
                }

            } catch(e) {
                console.log(e);
            }

        } catch (e) {
            console.log(e)
        }
    } else {
        console.log("NO TOKEN?? 😢😢😢");
    }
    connection.end();
}

export default handler;