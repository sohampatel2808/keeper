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
        onClick={(note, operationType) => {
          this.handleNoteOperation(note, operationType);
        }} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <CreateNote 
          onClick={(note) => {
            this.handleNoteOperation(note, NoteOperationType.ADD);
          }} />

        {this.state.notes.map(
          (note) => {
            return this.createNote(note); 
          }
        )}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
