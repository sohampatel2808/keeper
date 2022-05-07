import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
