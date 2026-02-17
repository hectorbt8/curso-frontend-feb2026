import styles from "./store-item.module.css";

const StoreItem = ({ img, title, price, description }) => {
	price = "$" + price;

	return (
		<div className={styles.card}>
			<img src={img} className={styles.img} />
			<div className={styles.content}>
				<h2>{title}</h2>
				<h3>{price}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default StoreItem;
