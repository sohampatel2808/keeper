import React from "react";

import './Note.css';
import { NoteOperationType } from '../model/note-operation.model';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleNoteOperation = this.handleNoteOperation.bind(this);
  }

  handleNoteOperation(event) {
    const { name } = event.target;

    let operationType;
    if (name === 'delete') {
      operationType = NoteOperationType.DELETE;
    } else if (name === 'edit') {
      operationType = NoteOperationType.EDIT;
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
          onClick={this.handleNoteOperation} >
          DELETE
        </button>

        <button
          name='edit'
          onClick={this.handleNoteOperation} >
          EDIT
        </button>
      </div>
    );
  }
}

export default Note;
