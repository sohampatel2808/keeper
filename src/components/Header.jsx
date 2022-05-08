import React from "react";

import './Header.css';
import HighlightIcon from '@mui/icons-material/Highlight';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <HighlightIcon /> Keeper
        </h1>
      </header>
    );
  }
}

export default Header;
