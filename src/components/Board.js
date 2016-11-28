import React, { Component, PropTypes } from 'react';
import NumberContainer from '../container/NumberContainer';

class Board extends Component{

  constructor(props) {
    super(props)
  }

  renderPieces(){
    var rows = [];
    for (var i = 0; i < this.props.pieces.length; i++) {
      console.log(this.props.pieces);
      rows.push(<NumberContainer key={i} index={i} number={this.props.pieces[i]}/>);
    }
    return rows;
  }
  render() {
    return(
      <div>{this.renderPieces()}
      </div>
    )
  }
}

Board.propTypes = {
  pieces: PropTypes.array.isRequired
}

export default Board
