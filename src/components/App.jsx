import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import TextArea from './TextArea'

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      title: 'Erster Eintrag',
      content: 'Ein bisschen text zum einstieg',
    },
    {
      title: 'Zweiter Eintrag',
      content: 'Jetzt wird die App besser und besser',
    },
  ])

  function addNote(note) {
    setNoteList((prevValue) => {
      return [...prevValue, note]
    })
  }

  function deleteNote(id) {
    setNoteList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })
  }

  function showNotes(note, index) {
    return <Note noteId={index} key={index} {...note} deleteNote={deleteNote} />
  }

  return (
    <div>
      <Header />
      <TextArea onNoteAdd={addNote} />
      {noteList.map(showNotes)}
      <Footer />
    </div>
  )
}

export default App
