import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext'
import Noteitems from './Noteitems';
import Addnotes from './Addnotes'

const Notes = () => {


    const context = useContext(notesContext);
    const { notes} = context;

    return (
        <>
            <Addnotes />
            <div className='row mt-5 '>
                <h2 className='text-center'>Your Note</h2>

                {notes.map((note) => {
                    return <Noteitems  note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes
