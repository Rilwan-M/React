

export default function GameOver({winner, onHandleRematch}){


    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p> {winner} won!</p>}
            {!winner && <p> It's a draw</p>}
         
            <p>
                <button onClick={onHandleRematch}>Rematch!</button>
            </p>
        </div>
    )



}