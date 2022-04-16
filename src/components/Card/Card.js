import styles from "./Card.module.css";

function Card(props) {
  const { data } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{data.status}</h3>
      <p className={data.status === 'Positif' ? styles.card__content_positive : data.status === 'Sembuh' ? styles.card__content_recovered : styles.card__content_dead}>{data.total}</p>
    </div>
  );
}

export default Card;
