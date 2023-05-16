import styles from "./Card.module.css";

export const Card = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className={styles.card}>
      <div>
        <img
          src={card.src}
          className={styles.cardFront}
          alt="card front side"
        />
        <img
          src="/img/cover.png"
          className={styles.cardBack}
          onClick={handleClick}
          alt="card back side"
        />
      </div>
    </div>
  );
};
