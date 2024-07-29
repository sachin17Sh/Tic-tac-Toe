import { useState } from "react"
import Player from "./Components/Players"
import GameBoard from "./Components/Board"

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  function handleSelectSquare(){
    setActivePlayer((currActiveplayer)=> currActiveplayer==='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
         <Player initialname="Player 1" symbol="X" isActive={activePlayer ==="X"}/>
         <Player initialname="Player 1" symbol="O" isActive={activePlayer ==="O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
