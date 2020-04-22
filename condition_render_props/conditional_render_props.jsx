class Results extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render () {
  return(
  <div>
      <h1>{this.props.fiftyFifty? 'You Win!' : 'You Lose!'}</h1>
  </div>
  );
  }
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick =  this.handleClick.bind(this);
  };
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render () {
    const expression = Math.random() >= 0.5? true : false;
  return(
  <div>
      <button onClick={this.handleClick}>Play Again</button>
      <Results fiftyFifty={expression}/>
      <p>{'Turn: ' + this.state.counter}</p>
  </div>
  );
  }
};

ReactDOM.render(<GameOfChance/>, document.getElementById('view'));
