import { useState } from "react";
import NoteContext from "./notesContext";

const NoteState = (props) => {

    const notesInitial=[
        {
          "_id": "62a217c3895b45e5af34d7c2",
          "user": "62a1d08ce39def1bd1618e94",
          "title": "Itachi of Hidden leaf",
          "desription": "I will protect Hidden Leaf",
          "tag": "Akatsuki",
          "date": "2022-06-09T15:54:43.597Z",
          "__v": 0
        },
        {
          "_id": "62b7f462969eca708b36cdc6",
          "user": "62a1d08ce39def1bd1618e94",
          "title": "My Title",
          "desription": "Naruto",
          "tag": "Anime",
          "date": "2022-06-26T05:53:38.699Z",
          "__v": 0
        }
      ]

      const [notes,setNote]=useState(notesInitial);
   

    return (
        <NoteContext.Provider value={{notes,setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
