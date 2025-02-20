const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

//GET ALL GAMES
app.get('/board_games', async (req, res) => {
    try {
        const [rows] = await board_games.query('SELECT * FROM items');
        res.json(rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    });


//GET INDIVIDUAL GAME
app.get('/board_games/:id', async (req, res) => {
    try {
        const [rows] = await board_games.query('SELECT * FROM board_games WHERE id = ?' [req.params.id]);
        res.json(rows[0] || {});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


//ADD NEW REVIEW
app.post('/reviews', async (req, res) => { //NEED TO ADD IN GAME ID SOMEWHERE?
    try {
        const {description} = req.body; //LATER ADD REVIEW TITLE AND 5 STAR RAING, PLUS HOOK UP TO USER ACCOUNT
        await board_games.query('INSERT INTO reviews (description) VALUES (?, ?)', [description]);
    res.status(201).json({message: 'Your review has been submitted.'});
} catch (error) {
    res.status(500).json({error: error.message});
}
});