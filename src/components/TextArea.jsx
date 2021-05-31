import React, { useState } from 'react'

const TextArea = (props) => {
  const [noteText, setNoteText] = useState({
    title: '',
    content: '',
  })
  const { title, content } = noteText

  function handleChange(event) {
    const { name, value } = event.target
    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }))
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name='title'
          placeholder='Title'
          value={title}
        />
        <textarea
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={content}
        />
        <button
          type='submit'
          onClick={(event) => {
            event.preventDefault()
            props.onNoteAdd(noteText)
            setNoteText({ title: '', content: '' })
          }}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TextArea
