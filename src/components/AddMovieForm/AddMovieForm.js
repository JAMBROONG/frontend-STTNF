import styles from './AddMovieForm.module.css';
const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addMovie}>
                <div className={styles.addMovie__left}>
                    <img src='https://picsum.photos/536/354' className={styles.addMovie__img} />
                </div>
                <div className={styles.addMovie__right}>
                    <h2 className={styles.addMovie__header}>Add Movie</h2>
                    <form className={styles.addMovie__form}>
                        <label htmlFor='title' className={styles.addMovie__label}>Title</label>
                        <input type='text' id='title' className={styles.addMovie__input} />

                        <label htmlFor='year' className={styles.addMovie__label}>Year</label>
                        <input type='text' id='year' className={styles.addMovie__input} />

                        <button className={styles.addMovie__btn}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovieForm;