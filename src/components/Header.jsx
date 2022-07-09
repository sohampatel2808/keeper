import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1><HighlightIcon /> Keeper</h1>
      </header>
    );
  }
}

export default Header;
