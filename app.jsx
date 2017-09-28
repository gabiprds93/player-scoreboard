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

const Header = ({players}) => {
  return(
    <div className="header">
      <Scoreboard players={players}/>
      <Timer />
    </div>
  )
}

const Scoreboard = ({players}) => {
  return(
    <div>
      <p>Players: {players.length}</p>
      <p>Total Points: {players[0].score + players[1].score + players[2].score}</p>
    </div>
  )
}

const Timer = () => {
  return(
    <div>
      <p>Stopwatch</p>
      <p>0</p>
      <p><button>Start</button> <button>Reset</button></p>
    </div>
  )
}
const PlayerList = ({players}) => {
  const list = players.map((item, index) => {
    return(
      <p>{item.name}<button>-</button>{item.score}<button>+</button></p>
    );
  });
  return(
    <div>
      {list}
    </div>
  )
}

const PlayerForm = () => {
  return(
    <div>
      <input type="text" placeholder="Enter a Name"/>
      <button>Add Player</button>
    </div>
  )
}

const Application = ({title, players}) => {
   return(
    <div>
      <h1>{title}</h1>
      <Header players={players}/>
      <PlayerList players={players}/>
      <PlayerForm />
    </div>
   ) ;
}

ReactDOM.render(<Application title="Scoreboard" 
players = {PLAYERS}/>, document.getElementById('container'));