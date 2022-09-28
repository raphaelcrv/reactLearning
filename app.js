const playersArray = [
	{
		name: "Manolo",
		score: 10
	},
	{
		name: "amilka",
		score : 20
	}
]

function Header(props) {

	const { title, totalPlayers } = props;

	console.log(title);

	return (
		<header>
			<h1>{title}</h1>
			<span className="stats">Players: {totalPlayers}</span>
		</header>
	);
}

//using class components to enable use the state 
/*
Note:
Before React 16.8, function components did not have
state or lifecycle hooks. With 16.8+, function components 
can now use hooks to use state and you can implement 
side-effects on first render and after every update.
*/
class Counter extends React.Component {

	constructor() {
		super();
		this.state = {
			score : 0
		};
	}

	incrementScore = () =>{
		console.log("increment");
		//calling set state using callback to avoid the async issue
		this.setState( prevState => {
			return {score : prevState.score += 1}
		})
	}

	decrementScore = ()=>{
		console.log("decrement");
		this.setState( nextState => {
			return {score : nextState.score -= 1}
		})
	}

	render(){
		//const { score } = this.props
		return (
			<div className="counter">
				<button onClick={this.decrementScore} className="counter-action decrement"> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button onClick={this.incrementScore} className="counter-action increment"> +</button>
			</div>
		)
	}
	
}

const Players = (props) => {

	const { name, score } = props;
	return (
		<div className="player">
			<span className="player-name">
				{name}
			</span>
			<Counter score={score}></Counter>

		</div>
	)
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header title="scoreBoard" totalPlayers={11} />
			{/* Player list */}
			{/* using map with JSX to render multiple players */}
			{playersArray.map((el) => {
				return <Players key={el.name} name={el.name} score={el.score}></Players>
			})}
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)