import React from 'react';

import './App.css';
import { NoteOperationType } from '../model/note-operation.model';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleNoteOperation = this.handleNoteOperation.bind(this);
    this.createNote = this.createNote.bind(this);

    this.state = {
      notes: []
    };
  }

  handleNoteOperation(note, operationType) {
    const cloneNotes = this.state.notes.slice();

    switch (operationType) {
      case NoteOperationType.ADD:
        note.id = cloneNotes.length;
        cloneNotes.push(note);
        break;

      case NoteOperationType.DELETE:
        let index = cloneNotes.findIndex(cloneNote => {
          return note.id === cloneNote.id;
        });

        if (index >= 0) {
          cloneNotes.splice(index, 1);
        }
        break;

      case NoteOperationType.EDIT:
        console.log(note);
        break;

      default:
        console.log('No note operation found');
    }

    this.setState({
      notes: cloneNotes
    });
  }

  createNote(note) {
    return (
      <Note 
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        onClick={this.handleNoteOperation} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <CreateNote
          note={this.state.currentNote}
          onClick={this.handleNoteOperation} />

        {this.state.notes.map(this.createNote)}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
