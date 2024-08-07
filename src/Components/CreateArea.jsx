import React, { useState } from "react";

function CreateArea(props) {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    let { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(note);
          event.preventDefault();
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
