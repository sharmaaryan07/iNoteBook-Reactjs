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

        const { title, desription, tag } = req.body;
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


//ROUTE 3: Update a note using: PUT "/api/notes/updatenote/:id". Logedin require.
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const { title, desription, tag } = req.body;
    // Create newNote object for updating the notes
    const newNote = {}

    // If title then change it with newNote title
    if (title) { 
        newNote.title = title 
    }
    if (desription) { 
        newNote.desription = desription 
    }
    if (tag) { 
        newNote.tag = tag 
    }


    // Find the note to be updated and update it.
    let note= await Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found");
    }

    // To see if user is not changing note of other user's
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }


    // To update the newNote
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json({note})
})

module.exports = router;