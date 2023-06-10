"use server"

import connect from "./db"

const handler = async (req, res) => {
    const connection = await connect();
    const clientData = req.body;
    try {
        const [data] = await connection.query('SELECT * FROM event WHERE event_id = ?', [clientData.event_id]);
        console.log(data);
        if(data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(403).json("нет мероприятий.");
        }
    } catch (e) {
        console.log(e)
    } finally {
        connection.end();
    }
}

export default handler;