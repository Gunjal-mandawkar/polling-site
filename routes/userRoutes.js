import express from 'express';
import { checkAuth } from '../middlewares/Auth.js';
import { searchbar, defaultpolls, vote, joinpoll, deletepoll, postpoll, pastpoll, getPollAnalytics, dashboard } from '../controllers/userController.js';

const router = express.Router();
console.log("-> User routes file loaded successfully");

router.post('/search', checkAuth, searchbar);
router.get('/pollsite', checkAuth, defaultpolls);
router.get('/dashboard', checkAuth, dashboard);
router.post('/poll/:pollid', checkAuth, joinpoll);
router.delete('/deletepoll/:pollid', checkAuth, deletepoll);
router.post('/postpoll', checkAuth, postpoll);
router.get('/pastpoll', checkAuth, pastpoll);
router.post('/vote', checkAuth, vote);
router.get('/analytics/:pollid', checkAuth, getPollAnalytics);

export default router;