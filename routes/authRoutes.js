import express from 'express';
import { register,login,logout,deleteAcc } from '../controllers/authController.js';
import { checkAuth } from '../middlewares/Auth.js';
 const router = express.Router();
// register 
router.post('/register', register);
//login 
router.post('/login', login);
//logout
router.post('/logout',checkAuth, logout);
//delete acc
router.post('/deleteacc',checkAuth,deleteAcc);

export default router;