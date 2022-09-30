import './GameOver.css'

const GameOver = props => {
  const {score, resettingGame} = props

  const resetGame = () => {
    resettingGame()
  }

  return (
    <div className="game-over-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <h1>Your Score</h1>
        <h1>{score}</h1>
        <div className="game-button-container">
          <button type="button" className="game-button" onClick={resetGame}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="game-logo"
            />
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
