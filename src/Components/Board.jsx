import { useState } from "react"
const initialboard= [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
//if your state is object or an array you update that state in im-mutable way simply make a copt of that state and make changes in that copy

export default function GameBoard({onSelectSquare, activePlayerSymbol}){
const[gameBoard, setgameBoard]=useState(initialboard)

function handleSelect(rowIndex , colIndex) {
    setgameBoard((prevGameBoard) => {
        const updatedGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updatedGameBoard

    })
    onSelectSquare()
}
    return <ol id="game-board">
   {gameBoard.map((row, rowIndex)=>(
    <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex) =>(
                <li key={colIndex}>
                <button onClick={()=>handleSelect(rowIndex,colIndex)}>{playerSymbol}</button></li>
            ))}
        </ol>
    </li>
))}
    </ol>
}