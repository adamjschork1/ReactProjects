const listStyle = {
  listStyleType: 'square',
  fontSize: 20,
  margin: 20,
  padding: 20,
  minHeight: 300,
  backgroundColor: 'lightBlue'
};

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks () {
  const renderFrameworks = frontEndFrameworks.map( x => <li key={x + 1}>{x}</li>);
return(
  <div style={listStyle}>
    <h1>Popular Frontend Javascript Frameworks</h1> <br/>
    {renderFrameworks}
  </div>
  );
};

ReactDOM.render(<Frameworks/>, document.getElementById('view'));
