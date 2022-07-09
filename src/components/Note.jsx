import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './Note.css';
import { NoteOperationType } from '../model/note-operation.model';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
  }

  render() {
    return (
      <div className='note'>
        <h1>{this.props.note.title}</h1>
        <p>{this.props.note.content}</p>

        <button onClick={this.handleDeleteNote}>
          <DeleteIcon />
        </button>

        <button onClick={this.handleEditNote}>
          <EditIcon />
        </button>
      </div>
    );
  }

  handleDeleteNote(event) {
    this.props.onClick(this.props.note, NoteOperationType.DELETE);
  }

  handleEditNote(event) {
    this.props.onClick(this.props.note, NoteOperationType.EDIT);
  }
}

export default Note;
