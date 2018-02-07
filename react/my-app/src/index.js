/**
 * Tic tac toe game sample.
 * TODO: 
 * If you have extra time or want to practice your new skills, here are some ideas for improvements you could make, listed in order of increasing difficulty:

Display the location for each move in the format (col, row) in the move history list.
Bold the currently selected item in the move list.
Rewrite Board to use two loops to make the squares instead of hardcoding them.
Add a toggle button that lets you sort the moves in either ascending or descending order.
When someone wins, highlight the three squares that caused the win.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TicTacToe from 'ticTacToe';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderReset(){
    return (
      <button onClick={() => this.props.onClick({isReset: true})} tooltip='Reset Game'>Reset</button>
    );
  }

  handleLoadItems(){
    //dynamically add rows
    //pseudocode:

    //for each row, add three cols.  


    let row = 0, 
        items = [],
        rowCount = 3,
        itemTotal = 9;
    
    // for(let i = 0; i < rowCount; i++){
    //   for(let j = 0; j < rowCount; i++){
    //     items.push(        
    //       <div className="board-row">
    //        {this.renderSquare(i)}
    //        {this.renderSquare(i+1)}
    //        {this.renderSquare(i+2)}
    //      </div>        
    //   );
    //   }
    // }
    
    return items;
  }

  render() {
    // return (
    //   <div>
    //     <div className="board-row">
    //       {this.renderSquare(0)}
    //       {this.renderSquare(1)}
    //       {this.renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(3)}
    //       {this.renderSquare(4)}
    //       {this.renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(6)}
    //       {this.renderSquare(7)}
    //       {this.renderSquare(8)}
    //     </div>
    //     <div>
    //       {this.renderReset(this.state)}
    //     </div>
    //   </div>
    // );
    return (
      <div>
        {
          this.handleLoadItems()
        }
        <div>
          {this.renderReset(this.state)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    if(this.state.location){
      
    }

    const moves = history.map((step, move) => {
      const desc = move ? 
      'Go to move #' + move :
      'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else{
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    if(i.isReset) {
      this.handleReset();
      return;
    }
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if(i < 3){
      current.location = '0,' + i;
    } else if(i < 6){
      current.location = '1,' + (i - 3);
    }
    else{
      current.location = '2,' + (i - 6);
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      location: current.location
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleReset(){
    this.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true
    });
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}