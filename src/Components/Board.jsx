const initialboard= [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard(){
    return <ol id="game-board">
   {initialboard.map((row, rowIndex)=>(
    <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex) =>(
                <li key={colIndex}><button>{playerSymbol}</button></li>
            ))}
        </ol>
    </li>
))}
    </ol>
}