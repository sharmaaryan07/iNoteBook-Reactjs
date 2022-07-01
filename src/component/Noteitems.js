import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext'


const Noteitems = (props) => {
    const context = useContext(notesContext);
    const { deleteNote, editNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">Title: {note.title}</h5>
           
                        <p className="card-text">Desription:  {note.desription}  </p>

                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}} ></i>
                        <i className="fa-solid fa-user-pen mx-2" onClick={()=>{editNote(note._id, note.desription, note.title)}}></i>
                    </div>
            </div>
        </div>
    )
}

export default Noteitems
