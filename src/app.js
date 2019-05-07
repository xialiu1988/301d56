import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Counters!</h1>
    </header>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleWord = e => {
    let count = e.target.value;
    this.setState({ count });
    console.log(this.state);

  };

  handleMinus = e => {
    e.preventDefault();
    let count = Number(this.state.count)-1;
    
    this.setState({ count });
  };

  handlePlus= e => {
    e.preventDefault();
    let count = Number(this.state.count)+1;

    this.setState({ count });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleMinus}>-</button>
        <input onChange={this.handleWord} value={this.state.count} />
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
