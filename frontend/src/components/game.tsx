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
				"http://localhost:3000/game/17"
			);

			setGame(await game.data);
		};
		void getGame();
	}, []);

	return (
		<div>t
			<h2>Users:</h2>
 {/*            
			{    users ?
				<ul>{users.map((user: {email: string, name: string}) => <li key={user.email.toString()}>{user.name} - {user.email}</li>)}</ul>
				: null
			}
 */}
		</div> );
};