import styles from "./Global.module.css";
import Card from "../Card/Card";

function Global(props) {
    const { dataGlobal } = props;

    return (
        <div className={styles.container}>
            <section className={styles.global}>
                <h2 className={styles.global__title}>Indonesia</h2>
                <h4 className={styles.global__subtitle}>Data Covid Berdasarkan Global</h4>
                <div className={styles.card__container}>
                    {dataGlobal.map((data) => {
                        return <Card key={data.status} data={data} />;
                    })}
                </div>
            </section>
        </div>
    );
}

export default Global;