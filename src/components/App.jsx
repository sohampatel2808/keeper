import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';

import { mockNotes } from '../mock-data/notes';

class App extends React.Component {
  createNote(note) {
    return (
      <Note 
        key={note.key}
        title={note.title}
        content={note.content} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        {mockNotes.map(this.createNote)}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
