import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./CovidForm.module.css";
import formImg from '../../assets/form.png';

function CovidForm(props) {

  const { dataProvince, setDataProvince } = props;

  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState('');

  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJmlError, setIsJmlError] = useState(false);

  function handleProvince(e) {
    setProvince(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJml(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (province === "") {
      setIsProvinceError(true);
    }
    else if (status === "") {
      setIsStatusError(true);
    }

    else if (jumlah === '') {
      setIsJmlError(true);
    }
    else {

      const findData = dataProvince.find(data => data.kota === province);

      if (status === 'positif') findData.kasus = jumlah;
      else if (status === 'sembuh') findData.sembuh = jumlah;
      else if (status === 'meninggal') findData.meninggal = jumlah;
      else if (status === 'dirawat') findData.dirawat = jumlah;

      setDataProvince(prev => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].kota === province) {
            prev[i] = findData;
            break;
          }
        }
        return [...prev];
      });

      console.log(dataProvince);

      setIsProvinceError(false);
      setIsStatusError(false);
      setIsJmlError(false);
      setProvince('');
      setStatus('');
      setJumlah('');
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={formImg}
            alt="Placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select id="provinsi" name="provinsi" value={province} className={styles.form__input} onChange={handleProvince}>
                <option>Pilih Provinsi</option>
                {
                  dataProvince.map((data) => {
                    return (
                      <option key={data.kota} value={data.kota}>{data.kota}</option>
                    )
                  })
                }
              </select>
              {isProvinceError && <Alert>Harap Pilih Provinsi!</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select id="status" name="status" value={status} className={styles.form__input} onChange={handleStatus}>
                <option>Pilih Status</option>
                <option value='positif'>Positif</option>
                <option value='sembuh'>Sembuh</option>
                <option value='meninggal'>Meninggal</option>
                <option value='dirawat'>Dirawat</option>
              </select>
              {isStatusError && <Alert>Harap Pilih Status!</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                id="jumlah"
                className={styles.form__input}
                type="text"
                name="jumlah"
                value={jumlah}
                onChange={handleJml}
              />
              {isJmlError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CovidForm;
