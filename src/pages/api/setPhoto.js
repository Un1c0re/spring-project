"use server"

import connect from "./db"

const  handler = async (req, res) => {
    const connection = await connect();
    const clientData = req.body;

    const photo = Buffer.from(clientData.photo, 'base64');
    const userData = clientData.userData;

    try {
        const [rows] = await connection.query('SELECT * FROM user WHERE login = ?', [userData.login]);
        if (rows.length > 0) {
            await connection.query('UPDATE user SET photo = ? WHERE login = ?', [photo, userData.login]);
            res.status(200).json({status: 'аватар обновлен 🥹'});
            console.log("AVATAR MUST BE UPDATED")
        } else {
            res.status(404).json({status: 'пользователь не найден'});
        }
    } catch (e) {
        res.status(403).json({status: 'что-то пошло не так ☠️'});
        console.log(e);
    } finally {
        connection.end();
    }
}

export default handler;