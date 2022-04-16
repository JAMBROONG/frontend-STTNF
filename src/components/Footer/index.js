import styles from "./Footer.module.css";
import NavbarList from "../NavbarList/NavbarList";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Covid ID</h1>
          <p className={styles.footer__author}>Developed by Jambroong</p>
        </div>
        <NavbarList />
      </footer>
    </div>
  );
}

export default Footer;
