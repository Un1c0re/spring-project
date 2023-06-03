"use server"

import connect from "./db"
import {parseCookies} from "nookies";
import jwt from "jsonwebtoken";

const  handler = async (req, res) => {
    const connection = await connect();
    const data = req.body;

    const eventData = data.eventData;
    const photo = Buffer.from(data.photo, 'base64');

    const { token } = parseCookies({ req });

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const login = decodedToken.login;
        const [userdata] = await connection.query('SELECT user_id FROM user WHERE login = ?', [login]);
        const userid = userdata[0].user_id;

        await connection.query(
            'INSERT INTO event (owner_id, event_name, event_description, event_datetime, event_place, event_photo) VALUES (?, ?, ?, ?, ?, ?)',
            [userid, eventData.event_name, eventData.event_description, eventData.event_datetime, eventData.event_place, photo]);
        res.status(200).json({status: 'аватар обновлен 🥹'});

    } catch (e) {
        res.status(403).json({status: 'что-то пошло не так ☠️'});
        console.log(e);
    } finally {
        connection.end();
    }
}

export default handler;