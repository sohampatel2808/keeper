import React from "react";

import './CreateNote.css';
import { NoteOperationType } from '../model/note-operation.model';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleAddNote(event) {
    this.props.onClick(this.state, NoteOperationType.ADD);

    this.setState({
      title: '',
      content: ''
    });

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            name='title'
            value={this.state.title}
            placeholder='Title'
            onChange={this.handleInputChange} />

          <textarea
            name='content'
            value={this.state.content}
            placeholder='Take a note...'
            onChange={this.handleInputChange} />

          <button 
            onClick={this.handleAddNote} >
            ADD
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateNote;
