import { Router } from "express";
import { getMyProjects } from "../controllers/projects.controllers.js";
import { getMySections } from "../controllers/sections.controllers.js";
import { getMyTask } from "../controllers/tasks.controllers.js";



const router = Router();


router.get('/projects/:id', getMyProjects);
router.get('/sections/:id', getMySections);
router.get('/tasks/:id', getMyTask);




export default router