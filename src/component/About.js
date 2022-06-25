import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/notesContext'

function About() {
    
    let a =useContext(noteContext)
    useEffect(()=>{
        a.update();
    });
    return (
        <div>
            this is About {a.state.name} {a.state.surname} 
        </div>
    )
}

export default About
