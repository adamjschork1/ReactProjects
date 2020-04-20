class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  };
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state =>
    ({
      userAge: state.input
    }));
  }
  render () {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
  return(
  <div>
      <h3>Enter Your Age to Continue</h3>
      <input type='number' value={this.state.input} onChange={this.handleChange}/>
      { this.state.userAge === '' ? buttonOne : this.state.userAge > 17 ? buttonTwo : buttonThree }
  </div>
  );
  }
};

ReactDOM.render(<MyComponent/>, document.getElementById('view'));
