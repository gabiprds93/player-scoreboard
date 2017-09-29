let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = ({ players }) => {
  return (
    <div className="header">
      <Stats players={players} />
      <Stopwatch />
    </div>
  )
}

function suma(players)
{
  let suma = 0;
  for(let i in players)
  {
    suma += players[i].score;
  }
  return suma;
}

const Stats = ({ players }) => {
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{suma(players)}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Stopwatch = () => {
  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <h1 className="stopwatch-time">0</h1>
      <button>Start</button><button>Reset</button>
    </div>
  )
}
const PlayerList = ({ players }) => {
  const list = players.map((item, index) => {
    return (
      <div key={item.id} className="player">
        <label className="player-name">{item.name}</label>
        <div className="player-score counter">
          <button className="counter-action decrement">-</button><label className="counter-score">{item.score}</label><button className="counter-action increment">+</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {list}
    </div>
  )
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
    <form>
      <input type="text" placeholder="Enter a Name"/>
      <input type="submit" value ="Add Player"/>
    </form>
    </div>
  )
}

const Application = ({ title, players }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard"
  players={PLAYERS} />, document.getElementById('container'));