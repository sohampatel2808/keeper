import React from "react";

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
