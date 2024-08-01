import { useState } from "react"
import Player from "./Components/Players"
import GameBoard from "./Components/Board"
import Log from "./Components/Log"
import {WINNING_COMBINATIONS} from './Components/Winning-comb'
import GameOver from "./Components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const INITIAL_GAME_BOARD= [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if (gameTurns.length>0 && gameTurns[0].player==='X') {
    currentPlayer='O' 
  } 
return currentPlayer
}
function derivedGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array=>[...array])];
  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col } = square
      gameBoard [row][col]=player
  }
  return gameBoard
}

function derivedWinner(gameBoard, players){
  let winner;
  for ( const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    if(firstSquareSymbol &&
      firstSquareSymbol===secondSquareSymbol &&
      firstSquareSymbol===thirdSquareSymbol
    ){
       winner=players[firstSquareSymbol];
    }
  }
  return winner
}
function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = derivedActivePlayer(gameTurns)
  const gameBoard= derivedGameBoard(gameTurns)
  const winner =  derivedWinner(gameBoard, players)
  const hasDraw = gameTurns.length===9 && !winner;
  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns=>{
      const currentPlayer = derivedActivePlayer(prevTurns)
      const updatedTurns =[
        {square:{row:rowIndex, col:colIndex}, player: currentPlayer},
         ...prevTurns]
         return updatedTurns;
    })
   
  }
  function handleRestart(){
    setGameTurns([])
  }
 function handlePlayerName(symbol, newName){
  setPlayers(prevPlayers =>{
    return{
      ...prevPlayers,
      [symbol]: newName
    }
  })

 }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
         <Player initialname={PLAYERS.X} symbol="X" isActive={activePlayer ==="X"} onChangeName = {handlePlayerName}/>
         <Player initialname={PLAYERS.O} symbol="O" isActive={activePlayer ==="O"} onChangeName = {handlePlayerName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
     <Log turns={gameTurns}/>
    </main>
  )
}

export default App
