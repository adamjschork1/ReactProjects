class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  };
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    })
  }
  render () {
  const messageList = this.state.messages.map(i => <li>{i}</li>);
  return(
  <div>
    <h2>Type in a new Message:</h2>
    <input value={this.state.input} onChange={this.handleChange}/>
    <button onClick={this.submitMessage}>Submit</button>
    <ul>{messageList}</ul>
  </div>
  );
  }
};

ReactDOM.render(<DisplayMessages/>, document.getElementById('message-view'));
