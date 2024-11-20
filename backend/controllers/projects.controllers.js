import {db} from "../db/db.js";

const getMyProjects = async (req, res) => {
    try {
        const { id: userId } = req.params;  // Accede al parámetro 'id' de la URL
        const query = 'SELECT * FROM Projects WHERE user_id = ?';
        const [data] = await db.query(query, [userId]);

        res.json(data);
    } catch (error) {

    }
}

export { getMyProjects };
