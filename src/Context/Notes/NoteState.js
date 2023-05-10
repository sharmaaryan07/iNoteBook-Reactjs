import { useState } from "react";
import NoteContext from "./notesContext";

const NoteState =  (props) => {

  const host='http://localhost:5000';

  const notesInitial = [
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
      "_id": "62b7f462969eca1708b36cdc6",
      "user": "62a1d08ce39def1bd1618e94",
      "title": "My Title",
      "desription": "Naruto",
      "tag": "Anime",
      "date": "2022-06-26T05:53:38.699Z",
      "__v": 0
    },
    {
      "_id": "62b7f462969eca7208b36cdc6",
      "user": "62a1d08ce39def1bd1618e94",
      "title": "My Title",
      "desription": "Naruto",
      "tag": "Anime",
      "date": "2022-06-26T05:53:38.699Z",
      "__v": 0
    },
    {
      "_id": "62b7f462969eca7308b36cdc6",
      "user": "62a1d08ce39def1bd1618e94",
      "title": "My Title",
      "desription": "Naruto",
      "tag": "Anime",
      "date": "2022-06-26T05:53:38.699Z",
      "__v": 0
    },
    {
      "_id": "62b7f462969eca7048b36cdc6",
      "user": "62a1d08ce39def1bd1618e94",
      "title": "My Title",
      "desription": "Naruto",
      "tag": "Anime",
      "date": "2022-06-26T05:53:38.699Z",
      "__v": 0
    }
  ]
  const [notes, setNote] = useState(notesInitial);

  // Add a Note
  const addNote = async (title, desription, tag) => {

    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      headers: {
        'Content-Type': 'application/json',
        'authToken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMWQwOGNlMzlkZWYxYmQxNjE4ZTk0In0sImlhdCI6MTY1NDc4OTY3OH0.DgUcf_Z4qWcOV4B-z-rtG4FOHQyXi6hb2yJbNSUpTxk',
      },
        body: JSON.stringify({title, desription, tag}) // body data type must match "Content-Type" header
    });
    const json=response.json(); 

    // Logic
    const note = {
      "_id": "62b7f462969eca7048b36cdc6",
      "user": "62a1d08ce39def1bd1618e94",
      "title": title,
      "desription": desription,
      "tag": tag,
      "date": "2022-06-26T05:53:38.699Z",
      "__v": 0
    };
    setNote(notes.concat(note))     // It will add the note
  }



  // Edit a Note
  const editNote = async (id, title, desription,  tag) => {
    
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      headers: {
        'Content-Type': 'application/json',
        'authToken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMWQwOGNlMzlkZWYxYmQxNjE4ZTk0In0sImlhdCI6MTY1NDc4OTY3OH0.DgUcf_Z4qWcOV4B-z-rtG4FOHQyXi6hb2yJbNSUpTxk',
      },
        body: JSON.stringify({title, desription,  tag}) // body data type must match "Content-Type" header
    });
    const json=response.json(); 
  
    
    // Logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.desription = desription;
        element.tag = tag;
      }
    }
  }


  // Delete a Note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => { return note._id !== id });
    setNote(newNote)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
