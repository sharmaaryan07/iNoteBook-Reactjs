import { useState } from "react";
import NoteContext from "./notesContext";

const NoteState = (props) => {

    const s1 = {
        "name": "Aryan",
        "surname": "Sharma"
    }

    const [state, setState]=useState(s1)

    let update=()=>{
        setInterval(() => {
            setState({
                "name": "Nisha",
                "surname": "Sharmaa"
            })
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
