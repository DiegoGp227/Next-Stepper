import { db } from "../db/db.js";

const getMyTask = async (req, res) => {
    try {
        const { id: section_id } = req.params;
        const query = 'SELECT * FROM Tasks WHERE section_id = ?';
        const [data] = await db.query(query, [section_id]);

        res.json(data);
    } catch (error) {

    }
}

export { getMyTask };