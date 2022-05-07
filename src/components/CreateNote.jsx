import React from "react";
import './CreateNote.css';

class CreateNote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input 
            placeholder="Title" />

          <textarea 
            placeholder="Take a note..." />

          <button>ADD</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateNote;
