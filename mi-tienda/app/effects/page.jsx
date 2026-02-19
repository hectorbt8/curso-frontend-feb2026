"use client";

import { useEffect, useState } from "react";

const Timer = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((t) => t + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <p>{time}</p>;
};

const Messager = () => {
	const [message, setMessage] = useState("Hola!");

	useEffect(() => {
		console.log('? Mensaje programado para enviar: "' + message + '"');
		const timeoutId = setTimeout(() => {
			console.log('?? Mensaje enviado: "' + message + '"');
		}, 3000);

		return () => {
			console.log('?? Mensaje cancelado "' + message + '"');
			clearTimeout(timeoutId);
		};
	}, [message]);

	return (
		<div>
			<label>
				Mensaje:{" "}
				<input value={message} onChange={(e) => setMessage(e.target.value)} />
			</label>
			<h1>{message}</h1>
		</div>
	);
};

const Search = () => {
	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState(null);

	useEffect(() => {
		let ignoreRequest = false;
		setUser(null);
		fetch(`https://dummyjson.com/users/${userId}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (!ignoreRequest) {
					setUser(data);
				}
			});

		return () => {
			ignoreRequest = true;
		};
	}, [userId]);

	const fullName = user?.firstName + " " + user?.lastName;

	return (
		<div>
			<select value={userId} onChange={(e) => setUserId(e.target.value)}>
				<option value={1}>User 1</option>
				<option value={2}>User 2</option>
				<option value={3}>User 3</option>
			</select>
			<h1>{user ? fullName : "Cargando..."}</h1>
		</div>
	);
};

const Effects = () => {
	const [isShown, setIsShown] = useState(false);

	return (
		<>
			{isShown && <Search />}
			<button onClick={() => setIsShown(!isShown)}>Toggle</button>
		</>
	);
};

export default Effects;
