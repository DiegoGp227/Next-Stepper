import {db} from "../db/db.js";

const getMySections = async (req, res) => {
    try {
        const { id: project_id } = req.params;  // Accede al parámetro 'id' de la URL
        const query = 'SELECT * FROM Sections WHERE project_id = ?';
        const [data] = await db.query(query, [project_id]);

        res.json(data);
    } catch (error) {
        
    }
}

export {getMySections}