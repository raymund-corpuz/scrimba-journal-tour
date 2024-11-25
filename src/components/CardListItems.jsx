import styles from "../modules/cardListItems.module.css";

const CardListItems = ({ image, title, country, description, date }) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={image} alt="photo" />
      </div>
      <div className={styles.cardInfo}>
        <h3>{country}</h3>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardListItems;
