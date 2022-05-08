import React from "react";

import './CreateNote.css';
import { NoteOperationType } from '../model/note-operation.model';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.props.onHandleInputChange(name, value);
  }

  handleAddNote(event) {
    this.props.onClick(this.props.note, NoteOperationType.ADD);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            name='title'
            value={this.props.note.title}
            placeholder='Title'
            onChange={this.handleInputChange} />

          <textarea
            name='content'
            value={this.props.note.content}
            placeholder='Take a note...'
            onChange={this.handleInputChange} />

          <button onClick={this.handleAddNote}>
            ADD
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateNote;
