import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Route, Routes} from "react-router-dom";

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
				<ul>{games.map((game: {id: number, name: string, pictureLink: string}) => 
                    <li key={game.id.toString()}> 
						<Link to={'/game/' + game.id.toString()}>{game.name}</Link><br></br> 
						<img src = {game.pictureLink} ></img>
					</li>)}
                </ul>
				: null
			}
		</div> );
};