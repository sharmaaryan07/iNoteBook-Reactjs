import React, { useContext } from 'react'
import './Home.css'
import notesContext from '../Context/Notes/notesContext'

function Home() {

    const context = useContext(notesContext);

    const { notes, setNote } = context;

    return (
        <div className='container mt-4'>
            <h2 className='d-flex justify-content-center'>Add a Note</h2>

            <form className=''>
                <div className="form-floating mb-3 ">
                    <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput" className='start'>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="current-password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" className='start2'>Password</label>
                </div>

                <button type="submit" className="mt-3 btn btn-primary">Submit</button>
            </form>

            <div>
                <h2 className='mt-5 text-center'>Your Note</h2>

                {notes.map((note)=>{
                    return note.desription;
                })}
            </div>
        </div>
    )
}

export default Home
