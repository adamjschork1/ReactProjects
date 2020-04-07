class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(state) {
    this.setState({
      input: event.target.value
    });
  }
  render () {
  return(
  <div>
      <p>Enter some text in the field below and watch it render on the page.</p>
    <input value={this.state.value} onChange={this.handleChange}/>
    <h3>Controlled Input:</h3>
    <p>{this.state.input}</p>
  </div>
  );
  }
};

ReactDOM.render(<ControlledInput/>, document.getElementById('view'));
