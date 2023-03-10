import {useEffect, useState} from "react";
import axios from "axios";
export const Game = () => {
	const [game, setGame] = useState([]);

	useEffect(() => {
		const getGame = async () => {
			/* Note that using Axios here rather than built-in Fetch causes a bit of code bloat
			* It used to be a HUGE problem, because Axios itself is huge
			* Vite, however, contains modern tree shaking (removing unused parts)
			* So if you try swapping in our project, you'll find we only save 6 kilobytes
			 */
			const game = await axios.get(
				"http://localhost:3000/game/29"
			);

			setGame(await game.data.name);
            console.log(game.data.name);
		};
		void getGame();
	}, []);

	return (
		<div>
			<h2>Game:</h2>
            <li>{game}</li>
		</div> );
};