import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext'
import Noteitems from './Noteitems';

const Notes = () => {


    const context = useContext(notesContext);
    const { notes, setNote } = context;

    return (
        <div className='row mt-5 '>
            <h2 className='text-center'>Your Note</h2>

            {notes.map((note) => {
                return <Noteitems key={note._id} note={note} />;
            })}
        </div>
    )
}

export default Notes
