import React from "react";

import './Note.css';
import { NoteOperationType } from '../model/note-operation.model';

class Note extends React.Component {
  handleNoteOperation(event) {
    const { name } = event.target;

    let operationType;
    if (name === 'delete') {
      operationType = NoteOperationType.DELETE;
    }

    const note = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content
    };

    this.props.onClick(note, operationType);
  }

  render() {
    return (
      <div className='note'>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button
          name='delete'
          onClick={(event) => {
            this.handleNoteOperation(event);
          }}>
          DELETE
        </button>
      </div>
    );
  }
}

export default Note;
