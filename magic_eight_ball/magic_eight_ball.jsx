const magicEightBallStyles = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
  minHeight: 400,
  padding: 20,
  fontSize: 18
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  ask () {
    if (this.state.userInput) {
      this.setState ({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange (event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render () {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
  return(
  <div style={magicEightBallStyles}>
      <h1 id='title'>Magic 8 Ball</h1>
      <p>Ask the all knowing eight ball a yes or no question.</p>
      <input type='text' value={this.state.userInput} onChange={this.handleChange}/>
      <button onClick={this.ask}>Ask</button>
      
      <h3>Your answer is...</h3>
      <p id='answer'>{answer}</p>
  </div>
  );
  }
};

ReactDOM.render(<MagicEightBall/>, document.getElementById('view'));
