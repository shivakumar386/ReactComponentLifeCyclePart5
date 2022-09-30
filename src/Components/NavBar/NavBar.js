import './NavBar.css'

const NavBar = props => {
  const {count, score} = props
  return (
    <ul className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <li className="nav-elements">
        <li className="nav-paragraph">
          <p>
            Score: <span className="nav-span">{score}</span>
          </p>
        </li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <li className="nav-span">
          <p>Remaining time</p>
          <p>{count} sec</p>
        </li>
      </li>
    </ul>
  )
}

export default NavBar
