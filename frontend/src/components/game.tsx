import {useEffect, useState} from "react";
import axios from "axios";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	useParams,
  } from "react-router-dom";

export const Game = () => {
	const { id } = useParams();
	const destination = "http://localhost:3000/game/" + id;
	const [game, setGame] = useState([]);
	let gameValues = []

	useEffect(() => {
		const getGame = async () => {
			/* Note that using Axios here rather than built-in Fetch causes a bit of code bloat
			* It used to be a HUGE problem, because Axios itself is huge
			* Vite, however, contains modern tree shaking (removing unused parts)
			* So if you try swapping in our project, you'll find we only save 6 kilobytes
			 */
			const game = await axios.get(
				destination
				// "http://localhost:3000/game/29"
			);

			setGame(await game.data);
		};
		void getGame();
	}, []);

	gameValues = Object.values(game);
	return (
		<div>
			<h2> {gameValues[1]}</h2>
            <div>{JSON.stringify(game)}</div>
		</div> );
};