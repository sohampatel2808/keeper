import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

import { mockNotes } from '../mock-data/notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  handleAddNote(note) {
    const cloneNotes = this.state.notes.slice();

    note.id = cloneNotes.length;
    cloneNotes.push(note);

    this.setState({
      notes: cloneNotes
    });
  }

  createNote(note) {
    return (
      <Note 
        key={note.id}
        title={note.title}
        content={note.content} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <CreateNote 
          onClick={(note) => {
            this.handleAddNote(note);
          }} />
        {this.state.notes.map(this.createNote)}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
