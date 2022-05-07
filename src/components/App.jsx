import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Note />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
