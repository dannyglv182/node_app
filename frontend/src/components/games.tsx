import {useEffect, useState} from "react";
import axios from "axios";
export const Games = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const getGames = async () => {
			const games = await axios.get(
				"http://localhost:3000/games"
			);
			setGames(await games.data);
            console.log(games);
		};
		void getGames();
	}, []);

	return (
		<div>
			<h2>Games:</h2>
			{    games ?
				<ul>{games.map((game: {name: string, pictureLink: string}) => 
                    <li key={game.name.toString()}>{game.name} <img src = {game.pictureLink} ></img></li>)}
                </ul>
				: null
			}
		</div> );
};