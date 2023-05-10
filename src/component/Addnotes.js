import React, { useContext } from 'react'
import { useState } from 'react';
import notesContext from '../Context/Notes/notesContext'


function Addnotes() {

    const context = useContext(notesContext);
    const { addNote } = context;


    const handleclick = (e) => {
        e.preventDefault()      // page reload na ho
        addNote(note.title, note.desription, note.tag);
    };

    const [note, setnote] = useState({ title: "", desription: "", tag: "" })
    const change = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })    //it means joo bhi value ...note maii haii usse same rhene de but usske agee ki property ([e.target.name]....) ko add ya overright kr dena 
    };

    return (
        <div>
            <h2 className='d-flex justify-content-center'>Add a Note</h2>

            <form >
                <div className="form-floating mb-3 ">
                    <input type="text" className="form-control " id="title" name="title" placeholder="Title" onChange={change} />
                    <label htmlFor="title" className='start'>Title</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="desription" name='desription' placeholder="Desription" onChange={change} />
                    <label htmlFor="desription" className='start2'>Desription</label>
                </div>

                <button type="submit" className="btn btn-outline-info mt-2" onClick={handleclick}>Add Note</button>
            </form>
        </div>
    )
}

export default Addnotes
