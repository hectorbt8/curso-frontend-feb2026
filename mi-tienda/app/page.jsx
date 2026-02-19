"use client";

import NavBar from "@/app/components/navbar";
import StoreItem from "@/app/components/store-item";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Home = () => {
	const [items, setItems] = useState(null);
	const [selected, setSelected] = useState([
		/* IDs de los seleccionados*/
	]);

	useEffect(() => {
		let ignoreRequest = false;
		setItems(null);
		fetch("https://dummyjson.com/products/category/groceries?limit=10")
			.then((resp) => resp.json())
			.then(({ products }) => {
				if (!ignoreRequest) {
					setItems(products);
				}
			});

		return () => {
			ignoreRequest = true;
		};
	}, []);

	const handleSelectItem = (id) => {
		if (selected.includes(id)) {
			setSelected(selected.filter((x) => x !== id));
		} else {
			setSelected([...selected, id]);
		}
	};

	const mappedItems = items?.map((item) => ({
		...item,
		img: item.thumbnail,
	}));

	return (
		<>
			{mappedItems
				? mappedItems.map(({ id, title, description, price, img }) => (
						<StoreItem
							key={id}
							title={title}
							description={description}
							price={price}
							img={img}
							isSelected={selected.includes(id)}
							onSelected={() => handleSelectItem(id)}
						/>
					))
				: "Cargando..."}
		</>
	);
};

export default Home;
