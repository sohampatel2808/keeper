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
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      notes: [],
      currentNote: this.getDefaultNoteState()
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <CreateNote
          note={this.state.currentNote}
          onClick={this.handleNoteOperation}
          onHandleInputChange={this.handleInputChange} />

        {
          this.state.notes.map((note) => {
            return <Note key={note.id} note={note} onClick={this.handleNoteOperation} />
          })
        }

        <Footer />
      </React.Fragment>
    );
  }

  handleNoteOperation(note, operationType) {
    let updatedState;

    switch (operationType) {
      case NoteOperationType.ADD:
        updatedState = this.getAddNoteState({...note});
        break;

      case NoteOperationType.DELETE:
        updatedState = this.getDeleteNoteState({...note});
        break;

      case NoteOperationType.EDIT:
        updatedState = {
          currentNote: {...note}
        };
        break;

      default:
        console.log('No note operation found');
    }

    this.setState(updatedState);
  }

  handleInputChange(name, value) {
    const cloneCurrentNote = this.state.currentNote;
    cloneCurrentNote[name] = value;

    this.setState({
      currentNote: cloneCurrentNote
    });
  }

  getDefaultNoteState() {
    return {
      id: '',
      title: '',
      content: ''
    };
  }

  getAddNoteState(note) {
    const cloneNotes = this.state.notes.slice();

    if (note.id) {
      // update existing note object in notes array          
      for (let i = 0; i < cloneNotes.length; i++) {
        if (note.id === cloneNotes[i].id) {
          cloneNotes[i] = note;
        }
      }
    } else {
      // add new note object in notes array
      cloneNotes.push({
        ...note,
        id: crypto.randomUUID()
      });
    }

    return {
      notes: cloneNotes,
      currentNote: this.getDefaultNoteState()
    };
  }

  getDeleteNoteState(note) {
    const cloneNotes = this.state.notes.slice();

    let deleteIndex = cloneNotes.findIndex(cloneNote => {
      return note.id === cloneNote.id;
    });

    if (deleteIndex >= 0) {
      cloneNotes.splice(deleteIndex, 1);
    }

    return {
      notes: cloneNotes
    };
  }
}

export default App;
