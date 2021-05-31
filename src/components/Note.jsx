import React from 'react'

function Note(props) {
  const { noteId, title, content, deleteNote } = props

  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          deleteNote(noteId)
        }}
      >
        DELETE
      </button>
    </div>
  )
}

export default Note
