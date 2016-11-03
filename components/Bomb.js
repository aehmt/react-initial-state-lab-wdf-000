const React = require('react')

class Bomb extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render () {
    let tmp;
    if (this.state.secondsLeft === 0) {
      tmp = "Boom!";
    } else {
      tmp = `${this.state.secondsLeft} seconds left before I go boom!`;
    }

    return (
        <div>{tmp}</div>
    );
  }
}

module.exports = Bomb;
