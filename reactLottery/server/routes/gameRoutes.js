const express = require('express');
const router = express.Router();
const {
  saveUserGame,
  getAllGamesAndGraphs,
  deleteUserGameHistory,
} = require('../controllers/gameController');
const protect = require('../middleware/authMiddleware');

router.post('/saveGame', saveUserGame);
router.post('/getGameData', getAllGamesAndGraphs);
router.delete('/deleteGameHistory', deleteUserGameHistory);

module.exports = router;
