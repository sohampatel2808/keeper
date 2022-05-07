import React from "react";
import './CreateNote.css';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleAddNote(event) {
    this.props.onClick(this.state);

    this.setState({
      title: '',
      content: ''
    });

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            name='title'
            value={this.state.title}
            placeholder='Title'
            onChange={(event) => {
              this.handleInputChange(event);
            }} />

          <textarea
            name='content'
            value={this.state.content}
            placeholder='Take a note...'
            onChange={(event) => {
              this.handleInputChange(event);
            }} />

          <button 
            onClick={(event) => {
              this.handleAddNote(event);
            }}>
            ADD
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateNote;
