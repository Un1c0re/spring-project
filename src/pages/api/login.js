"use server";

const handler = (req, res) => {
    const {email, pass} = req.body;
    console.log("this is password: ", pass);
}

export default handler;

