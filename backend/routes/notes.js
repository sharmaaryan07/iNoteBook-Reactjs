const express = require('express');
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');    // Imported  jsonwebtoken
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');    //Imported express-validator



//ROUTE 1: Get all notes using: GET "/api/notes/getuser". Logedin require.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occure")
    }
})

//ROUTE 2: Add a new note using: POST "/api/notes/addnote". Logedin require.
router.post('/addnote', fetchuser, [
    // title must be at least 3 chars long
    body('title', 'ust be at least 3 chars long').isLength({ min: 3 }),
    // desription must be at least 5 chars long
    body('desription', 'must be at least 5 chars long').isLength({ min: 5 }),

], async (req, res) => {
    try {

        const {title, desription, tag} = req.body;
        // If there is error show bad request and show errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, desription, tag, user: req.user.id
        })
    
        //It will save the note
        const saveNote = await note.save()  
        res.json(saveNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occure")
    }
})

module.exports = router;