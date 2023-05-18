import styles from "./Card.module.css";

export const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
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
