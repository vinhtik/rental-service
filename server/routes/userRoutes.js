import { Router } from "express";
import upload from "../middleware/upload.js";
import { checkAuth, login, logout, registration } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/register', upload.single('avatar'), registration);
router.get('/login', authenticateToken, checkAuth);
router.post('/login', login);
router.delete('/logout', logout);


export default router;