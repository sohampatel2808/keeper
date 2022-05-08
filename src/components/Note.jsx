import React from "react";

import './Note.css';
import { NoteOperationType } from '../model/note-operation.model';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleNoteOperation = this.handleNoteOperation.bind(this);
  }

  render() {
    return (
      <div className='note'>
        <h1>{this.props.note.title}</h1>
        <p>{this.props.note.content}</p>
        <button
          name='delete'
          onClick={this.handleNoteOperation}>
          DELETE
        </button>

        <button
          name='edit'
          onClick={this.handleNoteOperation}>
          EDIT
        </button>
      </div>
    );
  }

  handleNoteOperation(event) {
    const { name } = event.target;

    let operationType;
    if (name === 'delete') {
      operationType = NoteOperationType.DELETE;
    } else if (name === 'edit') {
      operationType = NoteOperationType.EDIT;
    }

    this.props.onClick(this.props.note, operationType);
  }
}

export default Note;
