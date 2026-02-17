import NavBar from "@/app/components/navbar";
import StoreItem from "@/app/components/store-item";
import { items } from "@/app/utils/test-data";

const Home = () => {
	return (
		<>
			<NavBar />
			{items.map(({ id, title, description, price, img }) => (
				<StoreItem
					key={id}
					title={title}
					description={description}
					price={price}
					img={img}
				/>
			))}
		</>
	);
};

export default Home;
