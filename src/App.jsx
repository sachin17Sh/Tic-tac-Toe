import Player from "./Components/Players"
import GameBoard from "./Components/Board"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players"> 
         <Player initialname="Player 1" symbol="X"/>
         <Player initialname="Player 1" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  )
}

export default App
