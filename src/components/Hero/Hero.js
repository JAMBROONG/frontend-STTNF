import styles from "./Hero.module.css";
import heroImg from '../../assets/hero.png';

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h2 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h2>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={heroImg}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
