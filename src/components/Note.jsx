import React from "react";
import './Note.css';

class Note extends React.Component {
  render() {
    return (
      <div className='note'>
        <h1>Note title</h1>
        <p>Note content</p>
      </div>
    );
  }
}

export default Note;
