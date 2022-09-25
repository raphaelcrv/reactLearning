function Header() {
	return (
			<header>
				<h1>Score Board</h1>
				<span className="stats">Players (1)</span>
			</header>
	);
}

const Counter = () =>{
return (
	<div className="counter">
	<button className="counter-action decrement"> - </button>
	<span className="counter-score">35</span>
	<button className="counter-action increment"> +</button>
</div>
)
}

const Players = () =>{
	return (
		<div className="player">
		<span className="player-name">
			Guil
		</span>
		<Counter></Counter>

		</div>
	)
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header />
			<Players />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)