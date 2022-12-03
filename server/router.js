import {Router} from "express";
import PostController from "./controllers/PostController.js";

const router = new Router();

router.get('/posts', PostController.get)
router.post('/posts', PostController.create)

export default router;