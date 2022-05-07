import React from "react";
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <p>Copyright © {new Date().getFullYear()}</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;